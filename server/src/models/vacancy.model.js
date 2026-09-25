import { db, now, parseList } from '../db/index.js';

export const VACANCY_STATUSES = ['draft', 'pending_approval', 'published', 'closed', 'archived'];

const LIST_FIELDS = {
  engagementTypes: 'engagement_types',
  keyResponsibilities: 'key_responsibilities',
  essentialRequirements: 'essential_requirements',
  desirableRequirements: 'desirable_requirements',
  requiredCardsLicences: 'required_cards_licences',
  payAndBenefits: 'pay_and_benefits',
};

const TEXT_FIELDS = {
  slug: 'slug',
  reference: 'reference',
  title: 'title',
  shortTitle: 'short_title',
  town: 'town',
  category: 'category',
  location: 'location',
  employmentType: 'employment_type',
  workingPattern: 'working_pattern',
  salaryRate: 'salary_rate',
  openingDate: 'opening_date',
  closingDate: 'closing_date',
  status: 'status',
  roleSummary: 'role_summary',
  rightToWorkSponsorship: 'right_to_work_sponsorship',
  applicationMethod: 'application_method',
  hiringManager: 'hiring_manager',
  approver: 'approver',
  candidatePrivacyUrl: 'candidate_privacy_url',
  seoTitle: 'seo_title',
  seoDescription: 'seo_description',
};

const fromRow = (row) => {
  if (!row) return null;
  const v = { id: row.id };
  for (const [key, col] of Object.entries(TEXT_FIELDS)) v[key] = row[col] ?? null;
  for (const [key, col] of Object.entries(LIST_FIELDS)) v[key] = parseList(row[col]);
  v.displaySalary = Boolean(row.display_salary);
  v.createdAt = row.created_at;
  v.updatedAt = row.updated_at;
  if (row.application_count !== undefined) v.applicationCount = row.application_count;
  if (row.new_count !== undefined) v.newApplicationCount = row.new_count;
  return v;
};

const toColumns = (data) => {
  const cols = {};
  for (const [key, col] of Object.entries(TEXT_FIELDS)) if (key in data) cols[col] = data[key] ?? null;
  for (const [key, col] of Object.entries(LIST_FIELDS)) if (key in data) cols[col] = JSON.stringify(data[key] || []);
  if ('displaySalary' in data) cols.display_salary = data.displaySalary ? 1 : 0;
  return cols;
};

/** A vacancy is open only if published and not past its closing time. */
export const isVacancyOpen = (v) => {
  if (!v || v.status !== 'published') return false;
  if (v.closingDate && Date.now() > new Date(v.closingDate).getTime()) return false;
  return true;
};

const WITH_COUNTS = `
  SELECT v.*,
    (SELECT COUNT(*) FROM applications a WHERE a.vacancy_id = v.id) AS application_count,
    (SELECT COUNT(*) FROM applications a WHERE a.vacancy_id = v.id AND a.status = 'new') AS new_count
  FROM vacancies v`;

export const listVacancies = ({ withCounts = false } = {}) => {
  const sql = withCounts
    ? `${WITH_COUNTS} ORDER BY v.created_at DESC`
    : 'SELECT * FROM vacancies ORDER BY created_at DESC';
  return db.prepare(sql).all().map(fromRow);
};

export const findVacancy = (idOrSlug) =>
  fromRow(db.prepare(`${WITH_COUNTS} WHERE v.id = ? OR v.slug = ?`).get(idOrSlug, idOrSlug));

export const slugExists = (slug, exceptId = '') =>
  Boolean(db.prepare('SELECT 1 FROM vacancies WHERE slug = ? AND id != ?').get(slug, exceptId));

export const referenceExists = (reference, exceptId = '') =>
  Boolean(db.prepare('SELECT 1 FROM vacancies WHERE reference = ? COLLATE NOCASE AND id != ?').get(reference, exceptId));

export const nextVacancyId = () => {
  const rows = db.prepare("SELECT id FROM vacancies WHERE id LIKE 'JOB-BG-%'").all();
  const max = rows.reduce((m, r) => Math.max(m, Number(r.id.slice(7)) || 0), 0);
  return `JOB-BG-${String(max + 1).padStart(2, '0')}`;
};

export const addVacancyEvent = (vacancyId, { changedBy, changeType, notes, createdAt }) => {
  db.prepare('INSERT INTO vacancy_events (vacancy_id, changed_by, change_type, notes, created_at) VALUES (?, ?, ?, ?, ?)')
    .run(vacancyId, changedBy, changeType, notes || null, createdAt || now());
};

export const listVacancyEvents = (vacancyId) =>
  db.prepare('SELECT changed_by AS changedBy, change_type AS changeType, notes, created_at AS timestamp FROM vacancy_events WHERE vacancy_id = ? ORDER BY created_at DESC, id DESC')
    .all(vacancyId);

export const insertVacancy = (data, { createdAt } = {}) => {
  const stamp = createdAt || now();
  const cols = { id: data.id, ...toColumns(data), created_at: stamp, updated_at: stamp };
  const names = Object.keys(cols);
  db.prepare(`INSERT INTO vacancies (${names.join(', ')}) VALUES (${names.map((n) => `@${n}`).join(', ')})`).run(cols);
  return findVacancy(data.id);
};

export const updateVacancy = (id, data) => {
  const cols = toColumns(data);
  if (!Object.keys(cols).length) return findVacancy(id);
  cols.updated_at = now();
  const sets = Object.keys(cols).map((c) => `${c} = @${c}`).join(', ');
  db.prepare(`UPDATE vacancies SET ${sets} WHERE id = @id`).run({ ...cols, id });
  return findVacancy(id);
};

/** Delete a vacancy. With { withApplications: true } its applications, CVs and notes are deleted too. */
export const deleteVacancy = (id, { withApplications = false } = {}) =>
  db.transaction(() => {
    if (withApplications) db.prepare('DELETE FROM applications WHERE vacancy_id = ?').run(id); // files and events cascade
    return db.prepare('DELETE FROM vacancies WHERE id = ?').run(id).changes > 0;
  })();
