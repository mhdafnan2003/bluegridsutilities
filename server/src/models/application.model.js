import { db, now, parseList } from '../db/index.js';

export const APPLICATION_STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'offered', 'hired', 'rejected', 'withdrawn'];

const fromRow = (row) => {
  if (!row) return null;
  return {
    id: row.id,
    vacancyId: row.vacancy_id,
    vacancyTitle: row.vacancy_title,
    vacancyReference: row.vacancy_reference,
    firstName: row.first_name,
    lastName: row.last_name,
    fullName: `${row.first_name} ${row.last_name}`.trim(),
    email: row.email,
    phone: row.phone,
    town: row.town,
    postcode: row.postcode,
    engagementRoute: row.engagement_route,
    cisStatus: row.cis_status,
    rightToWork: row.right_to_work,
    sponsorship: row.sponsorship,
    drivingLicence: row.driving_licence,
    certificates: parseList(row.certificates),
    otherCertificates: row.other_certificates,
    relevantExperience: row.relevant_experience,
    experienceYears: row.experience_years,
    interviewAvailability: row.interview_availability,
    startDate: row.start_date,
    status: row.status,
    emailStatus: row.email_status,
    emailError: row.email_error,
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
    cv: row.cv_filename ? { filename: row.cv_filename, contentType: row.cv_type, size: row.cv_size } : null,
  };
};

const SELECT = `
  SELECT a.*, f.filename AS cv_filename, f.content_type AS cv_type, f.size AS cv_size
  FROM applications a LEFT JOIN application_files f ON f.application_id = a.id`;

export const insertApplication = (app, cv) => {
  const stamp = app.submittedAt || now();
  db.transaction(() => {
    db.prepare(`
      INSERT INTO applications (
        id, vacancy_id, vacancy_title, vacancy_reference, first_name, last_name, email, phone, town, postcode,
        engagement_route, cis_status, right_to_work, sponsorship, driving_licence, certificates, other_certificates,
        relevant_experience, experience_years, interview_availability, start_date, status, email_status, submitted_at, updated_at
      ) VALUES (
        @id, @vacancyId, @vacancyTitle, @vacancyReference, @firstName, @lastName, @email, @phone, @town, @postcode,
        @engagementRoute, @cisStatus, @rightToWork, @sponsorship, @drivingLicence, @certificates, @otherCertificates,
        @relevantExperience, @experienceYears, @interviewAvailability, @startDate, 'new', 'pending', @stamp, @stamp
      )`).run({ ...app, certificates: JSON.stringify(app.certificates || []), stamp });
    if (cv) {
      db.prepare('INSERT INTO application_files (application_id, filename, content_type, size, data) VALUES (?, ?, ?, ?, ?)')
        .run(app.id, cv.filename, cv.contentType, cv.size, cv.buffer);
    }
    addApplicationEvent(app.id, { actor: 'Candidate', type: 'SUBMITTED', note: `Applied via website for ${app.vacancyReference}` });
  })();
  return findApplication(app.id);
};

export const findApplication = (id) => fromRow(db.prepare(`${SELECT} WHERE a.id = ?`).get(id));

export const hasRecentApplication = (email, vacancyId, sinceIso) =>
  Boolean(db.prepare('SELECT 1 FROM applications WHERE email = ? AND vacancy_id = ? AND submitted_at >= ?').get(email, vacancyId, sinceIso));

/** Filtered, paginated list. */
export const listApplications = ({ vacancyId, status, q, page = 1, pageSize = 25, sort = 'newest' } = {}) => {
  const where = [];
  const params = {};
  if (vacancyId) { where.push('a.vacancy_id = @vacancyId'); params.vacancyId = vacancyId; }
  if (status) { where.push('a.status = @status'); params.status = status; }
  if (q) {
    where.push(`(a.first_name || ' ' || a.last_name LIKE @q OR a.email LIKE @q OR a.phone LIKE @q OR a.town LIKE @q OR a.postcode LIKE @q OR a.id LIKE @q)`);
    params.q = `%${q}%`;
  }
  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const order = sort === 'oldest' ? 'a.submitted_at ASC' : sort === 'name' ? 'a.last_name COLLATE NOCASE, a.first_name COLLATE NOCASE' : 'a.submitted_at DESC';
  const total = db.prepare(`SELECT COUNT(*) AS n FROM applications a ${whereSql}`).get(params).n;
  const rows = db.prepare(`${SELECT} ${whereSql} ORDER BY ${order} LIMIT @limit OFFSET @offset`)
    .all({ ...params, limit: pageSize, offset: (page - 1) * pageSize });
  return { total, page, pageSize, data: rows.map(fromRow) };
};

export const getApplicationFile = (id) =>
  db.prepare('SELECT filename, content_type AS contentType, size, data FROM application_files WHERE application_id = ?').get(id);

export const addApplicationEvent = (applicationId, { actor, type, fromStatus = null, toStatus = null, note = null }) => {
  db.prepare('INSERT INTO application_events (application_id, actor, type, from_status, to_status, note, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(applicationId, actor, type, fromStatus, toStatus, note, now());
};

export const listApplicationEvents = (applicationId) =>
  db.prepare('SELECT id, actor, type, from_status AS fromStatus, to_status AS toStatus, note, created_at AS createdAt FROM application_events WHERE application_id = ? ORDER BY created_at DESC, id DESC')
    .all(applicationId);

export const setApplicationStatus = (id, status, actor, note) => {
  const current = findApplication(id);
  if (!current) return null;
  if (current.status === status) return current;
  db.transaction(() => {
    db.prepare('UPDATE applications SET status = ?, updated_at = ? WHERE id = ?').run(status, now(), id);
    addApplicationEvent(id, { actor, type: 'STATUS_CHANGE', fromStatus: current.status, toStatus: status, note: note || null });
  })();
  return findApplication(id);
};

export const setEmailStatus = (id, emailStatus, emailError = null) => {
  db.prepare('UPDATE applications SET email_status = ?, email_error = ? WHERE id = ?').run(emailStatus, emailError, id);
};

export const deleteApplication = (id) => db.prepare('DELETE FROM applications WHERE id = ?').run(id).changes > 0;

export const countApplicationsForVacancy = (vacancyId) =>
  db.prepare('SELECT COUNT(*) AS n FROM applications WHERE vacancy_id = ?').get(vacancyId).n;

/** Numbers for the dashboard overview. */
export const getStats = () => {
  const byStatus = Object.fromEntries(APPLICATION_STATUSES.map((s) => [s, 0]));
  for (const r of db.prepare('SELECT status, COUNT(*) AS n FROM applications GROUP BY status').all()) byStatus[r.status] = r.n;
  const total = Object.values(byStatus).reduce((a, b) => a + b, 0);

  const day = 864e5;
  const since = (days) => new Date(Date.now() - days * day).toISOString();
  const count = (from, to) => db.prepare('SELECT COUNT(*) AS n FROM applications WHERE submitted_at >= ? AND submitted_at < ?').get(from, to).n;
  const last7 = count(since(7), now());
  const prev7 = count(since(14), since(7));

  // Daily counts for the last 30 days (UTC dates), zero-filled.
  const rows = db.prepare("SELECT substr(submitted_at, 1, 10) AS d, COUNT(*) AS n FROM applications WHERE submitted_at >= ? GROUP BY d")
    .all(new Date(Date.now() - 29 * day).toISOString().slice(0, 10));
  const map = Object.fromEntries(rows.map((r) => [r.d, r.n]));
  const daily = [];
  for (let i = 29; i >= 0; i -= 1) {
    const d = new Date(Date.now() - i * day).toISOString().slice(0, 10);
    daily.push({ date: d, count: map[d] || 0 });
  }

  const recent = db.prepare(`${SELECT} ORDER BY a.submitted_at DESC LIMIT 6`).all().map(fromRow);
  const emailFailures = db.prepare("SELECT COUNT(*) AS n FROM applications WHERE email_status = 'failed'").get().n;
  return { total, byStatus, last7, prev7, daily, recent, emailFailures };
};
