import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';
import { config } from '../config/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Default location: server/data/bluegrid.db. Override with DB_PATH (e.g. a mounted persistent volume).
const dbPath = config.dbPath ? path.resolve(config.dbPath) : path.resolve(__dirname, '../../data/bluegrid.db');
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

export const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.pragma('busy_timeout = 5000');

// Schema. Each entry runs once, in order; the applied version is kept in PRAGMA user_version.
const MIGRATIONS = [
  `
  CREATE TABLE vacancies (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    reference TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    short_title TEXT,
    town TEXT,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    employment_type TEXT NOT NULL,
    engagement_types TEXT NOT NULL DEFAULT '[]',
    working_pattern TEXT,
    salary_rate TEXT,
    display_salary INTEGER NOT NULL DEFAULT 1,
    opening_date TEXT,
    closing_date TEXT,
    status TEXT NOT NULL DEFAULT 'draft',
    role_summary TEXT NOT NULL DEFAULT '',
    key_responsibilities TEXT NOT NULL DEFAULT '[]',
    essential_requirements TEXT NOT NULL DEFAULT '[]',
    desirable_requirements TEXT NOT NULL DEFAULT '[]',
    required_cards_licences TEXT NOT NULL DEFAULT '[]',
    pay_and_benefits TEXT NOT NULL DEFAULT '[]',
    right_to_work_sponsorship TEXT,
    application_method TEXT,
    hiring_manager TEXT,
    approver TEXT,
    candidate_privacy_url TEXT,
    seo_title TEXT,
    seo_description TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE INDEX idx_vacancies_status ON vacancies(status);

  CREATE TABLE vacancy_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vacancy_id TEXT NOT NULL REFERENCES vacancies(id) ON DELETE CASCADE,
    changed_by TEXT NOT NULL,
    change_type TEXT NOT NULL,
    notes TEXT,
    created_at TEXT NOT NULL
  );
  CREATE INDEX idx_vacancy_events_vacancy ON vacancy_events(vacancy_id);

  CREATE TABLE applications (
    id TEXT PRIMARY KEY,
    vacancy_id TEXT NOT NULL REFERENCES vacancies(id),
    vacancy_title TEXT NOT NULL,
    vacancy_reference TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    town TEXT,
    postcode TEXT,
    engagement_route TEXT,
    cis_status TEXT,
    right_to_work TEXT,
    sponsorship TEXT,
    driving_licence TEXT,
    certificates TEXT NOT NULL DEFAULT '[]',
    other_certificates TEXT,
    relevant_experience TEXT,
    experience_years TEXT,
    interview_availability TEXT,
    start_date TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    email_status TEXT NOT NULL DEFAULT 'pending',
    email_error TEXT,
    submitted_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE INDEX idx_applications_vacancy ON applications(vacancy_id);
  CREATE INDEX idx_applications_status ON applications(status);
  CREATE INDEX idx_applications_submitted ON applications(submitted_at);
  CREATE INDEX idx_applications_email ON applications(email);

  CREATE TABLE application_files (
    application_id TEXT PRIMARY KEY REFERENCES applications(id) ON DELETE CASCADE,
    filename TEXT NOT NULL,
    content_type TEXT NOT NULL,
    size INTEGER NOT NULL,
    data BLOB NOT NULL
  );

  CREATE TABLE application_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    application_id TEXT NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    actor TEXT NOT NULL,
    type TEXT NOT NULL,
    from_status TEXT,
    to_status TEXT,
    note TEXT,
    created_at TEXT NOT NULL
  );
  CREATE INDEX idx_application_events_app ON application_events(application_id);

  CREATE TABLE admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL,
    last_login_at TEXT
  );
  `,
  // Accounts whose login ID and password come from ADMIN_ID / ADMIN_PASSWORD in .env
  `ALTER TABLE admin_users ADD COLUMN env_managed INTEGER NOT NULL DEFAULT 0;`,
];

const migrate = () => {
  const current = db.pragma('user_version', { simple: true });
  for (let v = current; v < MIGRATIONS.length; v += 1) {
    db.transaction(() => {
      db.exec(MIGRATIONS[v]);
      db.pragma(`user_version = ${v + 1}`);
    })();
  }
};

migrate();

export const now = () => new Date().toISOString();

export const parseList = (value) => {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const dbFile = dbPath;
