import { db, now } from '../db/index.js';

// `email` holds the login ID: an email address or a username.
const fromRow = (row) =>
  row
    ? { id: row.id, email: row.email, name: row.name, envManaged: Boolean(row.env_managed), createdAt: row.created_at, lastLoginAt: row.last_login_at }
    : null;

export const countAdmins = () => db.prepare('SELECT COUNT(*) AS n FROM admin_users').get().n;

export const findAdminByEmail = (email) => db.prepare('SELECT * FROM admin_users WHERE email = ? COLLATE NOCASE').get(email) || null;

export const findAdminById = (id) => fromRow(db.prepare('SELECT * FROM admin_users WHERE id = ?').get(id));

export const getPasswordHash = (id) => db.prepare('SELECT password_hash FROM admin_users WHERE id = ?').get(id)?.password_hash || null;

export const createAdmin = ({ email, name, passwordHash, envManaged = false }) => {
  const info = db.prepare('INSERT INTO admin_users (email, name, password_hash, env_managed, created_at) VALUES (?, ?, ?, ?, ?)')
    .run(email.toLowerCase(), name, passwordHash, envManaged ? 1 : 0, now());
  return findAdminById(info.lastInsertRowid);
};

export const setAdminPassword = (id, passwordHash) =>
  db.prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?').run(passwordHash, id);

export const updateEnvAdmin = (id, name) =>
  db.prepare('UPDATE admin_users SET name = ?, env_managed = 1 WHERE id = ?').run(name, id);

/** Remove accounts that were set from .env under a login ID that is no longer configured. */
export const removeStaleEnvAdmins = (currentLogin) =>
  db.prepare('SELECT email FROM admin_users WHERE env_managed = 1 AND email != ? COLLATE NOCASE').all(currentLogin).map((r) => {
    db.prepare('DELETE FROM admin_users WHERE email = ?').run(r.email);
    return r.email;
  });

export const touchLogin = (id) => db.prepare('UPDATE admin_users SET last_login_at = ? WHERE id = ?').run(now(), id);

export const toPublicAdmin = fromRow;
