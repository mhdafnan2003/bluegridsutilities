// Mongoose schemas and models. Importing this file (transitively via the models/*.js files)
// also imports ./index.js, whose top-level `await mongoose.connect(...)` guarantees a live
// connection before any query in this app can run.
import { mongoose } from './index.js';

const { Schema } = mongoose;

// ------------------------------------------------------------------------------------------
// Vacancy
// ------------------------------------------------------------------------------------------

const VacancyEventSchema = new Schema(
  {
    changedBy: { type: String, required: true },
    changeType: { type: String, required: true },
    notes: { type: String, default: null },
    createdAt: { type: String, required: true },
  },
  { _id: false },
);

const VacancySchema = new Schema(
  {
    _id: { type: String }, // e.g. "JOB-BG-01"
    slug: { type: String, required: true, unique: true },
    reference: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortTitle: { type: String, default: null },
    town: { type: String, default: null },
    category: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: { type: String, required: true },
    engagementTypes: { type: [String], default: [] },
    workingPattern: { type: String, default: null },
    salaryRate: { type: String, default: null },
    displaySalary: { type: Boolean, default: true },
    openingDate: { type: String, default: null },
    closingDate: { type: String, default: null },
    status: { type: String, required: true, default: 'draft' },
    roleSummary: { type: String, default: '' },
    keyResponsibilities: { type: [String], default: [] },
    essentialRequirements: { type: [String], default: [] },
    desirableRequirements: { type: [String], default: [] },
    requiredCardsLicences: { type: [String], default: [] },
    payAndBenefits: { type: [String], default: [] },
    rightToWorkSponsorship: { type: String, default: null },
    applicationMethod: { type: String, default: null },
    hiringManager: { type: String, default: null },
    approver: { type: String, default: null },
    candidatePrivacyUrl: { type: String, default: null },
    seoTitle: { type: String, default: null },
    seoDescription: { type: String, default: null },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
    events: { type: [VacancyEventSchema], default: [] },
  },
  { versionKey: false },
);
VacancySchema.index({ status: 1 });

// ------------------------------------------------------------------------------------------
// Application
// ------------------------------------------------------------------------------------------

const ApplicationEventSchema = new Schema(
  {
    actor: { type: String, required: true },
    type: { type: String, required: true },
    fromStatus: { type: String, default: null },
    toStatus: { type: String, default: null },
    note: { type: String, default: null },
    createdAt: { type: String, required: true },
  },
  { timestamps: false },
); // keeps its auto _id, used as the event's `id` in the admin timeline

const CvSchema = new Schema(
  {
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true },
    data: { type: Buffer, required: true },
  },
  { _id: false },
);

const ApplicationSchema = new Schema(
  {
    _id: { type: String }, // e.g. "APP-20260326-A1B2C3"
    vacancyId: { type: String, required: true },
    vacancyTitle: { type: String, required: true },
    vacancyReference: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    town: { type: String, default: null },
    postcode: { type: String, default: null },
    engagementRoute: { type: String, default: null },
    cisStatus: { type: String, default: null },
    rightToWork: { type: String, default: null },
    sponsorship: { type: String, default: null },
    drivingLicence: { type: String, default: null },
    certificates: { type: [String], default: [] },
    otherCertificates: { type: String, default: null },
    relevantExperience: { type: String, default: null },
    experienceYears: { type: String, default: null },
    interviewAvailability: { type: String, default: null },
    startDate: { type: String, default: null },
    status: { type: String, required: true, default: 'new' },
    emailStatus: { type: String, required: true, default: 'pending' },
    emailError: { type: String, default: null },
    submittedAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
    cv: { type: CvSchema, default: null },
    events: { type: [ApplicationEventSchema], default: [] },
  },
  { versionKey: false },
);
ApplicationSchema.index({ vacancyId: 1 });
ApplicationSchema.index({ status: 1 });
ApplicationSchema.index({ submittedAt: 1 });
ApplicationSchema.index({ email: 1 });

// ------------------------------------------------------------------------------------------
// Admin user
// ------------------------------------------------------------------------------------------

const AdminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true },
    passwordHash: { type: String, required: true },
    envManaged: { type: Boolean, default: false },
    createdAt: { type: String, required: true },
    lastLoginAt: { type: String, default: null },
  },
  { versionKey: false },
);

export const Vacancy = mongoose.model('Vacancy', VacancySchema);
export const Application = mongoose.model('Application', ApplicationSchema);
export const AdminUser = mongoose.model('AdminUser', AdminUserSchema);
