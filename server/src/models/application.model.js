import { now, escapeRegExp } from '../db/index.js';
import { Application } from '../db/schemas.js';

export const APPLICATION_STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'offered', 'hired', 'rejected', 'withdrawn'];

const shape = (doc) => {
  if (!doc) return null;
  return {
    id: doc._id,
    vacancyId: doc.vacancyId,
    vacancyTitle: doc.vacancyTitle,
    vacancyReference: doc.vacancyReference,
    firstName: doc.firstName,
    lastName: doc.lastName,
    fullName: `${doc.firstName} ${doc.lastName}`.trim(),
    email: doc.email,
    phone: doc.phone,
    town: doc.town,
    postcode: doc.postcode,
    engagementRoute: doc.engagementRoute,
    cisStatus: doc.cisStatus,
    rightToWork: doc.rightToWork,
    sponsorship: doc.sponsorship,
    drivingLicence: doc.drivingLicence,
    certificates: doc.certificates || [],
    otherCertificates: doc.otherCertificates,
    relevantExperience: doc.relevantExperience,
    experienceYears: doc.experienceYears,
    interviewAvailability: doc.interviewAvailability,
    startDate: doc.startDate,
    status: doc.status,
    emailStatus: doc.emailStatus,
    emailError: doc.emailError,
    submittedAt: doc.submittedAt,
    updatedAt: doc.updatedAt,
    cv: doc.cv ? { filename: doc.cv.filename, contentType: doc.cv.contentType, size: doc.cv.size } : null,
  };
};

export const insertApplication = async (app, cv) => {
  const stamp = app.submittedAt || now();
  const doc = await Application.create({
    _id: app.id,
    vacancyId: app.vacancyId,
    vacancyTitle: app.vacancyTitle,
    vacancyReference: app.vacancyReference,
    firstName: app.firstName,
    lastName: app.lastName,
    email: app.email,
    phone: app.phone,
    town: app.town,
    postcode: app.postcode,
    engagementRoute: app.engagementRoute,
    cisStatus: app.cisStatus,
    rightToWork: app.rightToWork,
    sponsorship: app.sponsorship,
    drivingLicence: app.drivingLicence,
    certificates: app.certificates || [],
    otherCertificates: app.otherCertificates,
    relevantExperience: app.relevantExperience,
    experienceYears: app.experienceYears,
    interviewAvailability: app.interviewAvailability,
    startDate: app.startDate,
    status: 'new',
    emailStatus: 'pending',
    submittedAt: stamp,
    updatedAt: stamp,
    cv: cv ? { filename: cv.filename, contentType: cv.contentType, size: cv.size, data: cv.buffer } : null,
    events: [{ actor: 'Candidate', type: 'SUBMITTED', note: `Applied via website for ${app.vacancyReference}`, createdAt: stamp }],
  });
  return shape(doc.toObject());
};

export const findApplication = async (id) => shape(await Application.findById(id).lean());

export const hasRecentApplication = async (email, vacancyId, sinceIso) =>
  Boolean(await Application.exists({ email, vacancyId, submittedAt: { $gte: sinceIso } }));

/** Filtered, paginated list. */
export const listApplications = async ({ vacancyId, status, q, page = 1, pageSize = 25, sort = 'newest' } = {}) => {
  const where = {};
  if (vacancyId) where.vacancyId = vacancyId;
  if (status) where.status = status;
  if (q) {
    const re = new RegExp(escapeRegExp(q), 'i');
    where.$or = [
      { firstName: re }, { lastName: re }, { email: re }, { phone: re }, { town: re }, { postcode: re }, { _id: re },
      { $expr: { $regexMatch: { input: { $concat: ['$firstName', ' ', '$lastName'] }, regex: escapeRegExp(q), options: 'i' } } },
    ];
  }

  const total = await Application.countDocuments(where);
  let query = Application.find(where);
  if (sort === 'oldest') query = query.sort({ submittedAt: 1 });
  else if (sort === 'name') query = query.collation({ locale: 'en', strength: 2 }).sort({ lastName: 1, firstName: 1 });
  else query = query.sort({ submittedAt: -1 });
  const docs = await query.skip((page - 1) * pageSize).limit(pageSize).lean();
  return { total, page, pageSize, data: docs.map(shape) };
};

export const getApplicationFile = async (id) => {
  const doc = await Application.findById(id, { cv: 1 }).lean();
  if (!doc?.cv) return null;
  return { filename: doc.cv.filename, contentType: doc.cv.contentType, size: doc.cv.size, data: doc.cv.data };
};

export const addApplicationEvent = async (applicationId, { actor, type, fromStatus = null, toStatus = null, note = null }) => {
  await Application.updateOne(
    { _id: applicationId },
    { $push: { events: { actor, type, fromStatus, toStatus, note, createdAt: now() } } },
  );
};

/** Most recent first (insertion order reversed - ties keep their original recency order). */
export const listApplicationEvents = async (applicationId) => {
  const doc = await Application.findById(applicationId, { events: 1 }).lean();
  return (doc?.events || [])
    .slice()
    .reverse()
    .map((e) => ({ id: String(e._id), actor: e.actor, type: e.type, fromStatus: e.fromStatus, toStatus: e.toStatus, note: e.note, createdAt: e.createdAt }));
};

export const setApplicationStatus = async (id, status, actor, note) => {
  const current = await Application.findById(id).lean();
  if (!current) return null;
  if (current.status === status) return shape(current);
  const stamp = now();
  const doc = await Application.findByIdAndUpdate(
    id,
    {
      $set: { status, updatedAt: stamp },
      $push: { events: { actor, type: 'STATUS_CHANGE', fromStatus: current.status, toStatus: status, note: note || null, createdAt: stamp } },
    },
    { new: true },
  ).lean();
  return shape(doc);
};

export const setEmailStatus = async (id, emailStatus, emailError = null) => {
  await Application.updateOne({ _id: id }, { $set: { emailStatus, emailError } });
};

export const deleteApplication = async (id) => (await Application.deleteOne({ _id: id })).deletedCount > 0;

export const countApplicationsForVacancy = async (vacancyId) => Application.countDocuments({ vacancyId });

/** Numbers for the dashboard overview. */
export const getStats = async () => {
  const byStatus = Object.fromEntries(APPLICATION_STATUSES.map((s) => [s, 0]));
  for (const r of await Application.aggregate([{ $group: { _id: '$status', n: { $sum: 1 } } }])) byStatus[r._id] = r.n;
  const total = Object.values(byStatus).reduce((a, b) => a + b, 0);

  const day = 864e5;
  const since = (days) => new Date(Date.now() - days * day).toISOString();
  const count = (from, to) => Application.countDocuments({ submittedAt: { $gte: from, $lt: to } });
  const last7 = await count(since(7), now());
  const prev7 = await count(since(14), since(7));

  // Daily counts for the last 30 days (UTC dates), zero-filled.
  const rows = await Application.aggregate([
    { $match: { submittedAt: { $gte: new Date(Date.now() - 29 * day).toISOString().slice(0, 10) } } },
    { $group: { _id: { $substrCP: ['$submittedAt', 0, 10] }, n: { $sum: 1 } } },
  ]);
  const map = Object.fromEntries(rows.map((r) => [r._id, r.n]));
  const daily = [];
  for (let i = 29; i >= 0; i -= 1) {
    const d = new Date(Date.now() - i * day).toISOString().slice(0, 10);
    daily.push({ date: d, count: map[d] || 0 });
  }

  const recent = (await Application.find().sort({ submittedAt: -1 }).limit(6).lean()).map(shape);
  const emailFailures = await Application.countDocuments({ emailStatus: 'failed' });
  return { total, byStatus, last7, prev7, daily, recent, emailFailures };
};
