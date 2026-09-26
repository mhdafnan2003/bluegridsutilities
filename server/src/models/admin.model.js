import mongoose from 'mongoose';
import { now } from '../db/index.js';
import { AdminUser } from '../db/schemas.js';

// `email` holds the login ID: an email address or a username.

/** The public shape of an admin (camelCase, boolean envManaged) - used for req.admin and API responses. */
const fromRow = (row) =>
  row
    ? { id: row.id, email: row.email, name: row.name, envManaged: Boolean(row.env_managed), createdAt: row.created_at, lastLoginAt: row.last_login_at }
    : null;

/** The raw shape (snake_case, as the old SQLite rows were) - used internally for auth checks. */
const toRaw = (doc) =>
  doc
    ? {
        id: String(doc._id),
        email: doc.email,
        name: doc.name,
        password_hash: doc.passwordHash,
        env_managed: doc.envManaged,
        created_at: doc.createdAt,
        last_login_at: doc.lastLoginAt,
      }
    : null;

export const countAdmins = () => AdminUser.countDocuments();

export const findAdminByEmail = async (email) => toRaw(await AdminUser.findOne({ email: String(email).toLowerCase() }).lean());

export const findAdminById = async (id) => {
  if (!mongoose.isValidObjectId(id)) return null;
  return fromRow(toRaw(await AdminUser.findById(id).lean()));
};

export const getPasswordHash = async (id) => {
  if (!mongoose.isValidObjectId(id)) return null;
  const doc = await AdminUser.findById(id, { passwordHash: 1 }).lean();
  return doc?.passwordHash || null;
};

export const createAdmin = async ({ email, name, passwordHash, envManaged = false }) => {
  const doc = await AdminUser.create({ email: email.toLowerCase(), name, passwordHash, envManaged, createdAt: now() });
  return findAdminById(doc._id);
};

export const setAdminPassword = (id, passwordHash) => AdminUser.updateOne({ _id: id }, { $set: { passwordHash } });

export const updateEnvAdmin = (id, name) => AdminUser.updateOne({ _id: id }, { $set: { name, envManaged: true } });

/** Remove accounts that were set from .env under a login ID that is no longer configured. */
export const removeStaleEnvAdmins = async (currentLogin) => {
  const stale = await AdminUser.find({ envManaged: true, email: { $ne: currentLogin.toLowerCase() } }, { email: 1 }).lean();
  if (stale.length) await AdminUser.deleteMany({ _id: { $in: stale.map((r) => r._id) } });
  return stale.map((r) => r.email);
};

export const touchLogin = (id) => AdminUser.updateOne({ _id: id }, { $set: { lastLoginAt: now() } });

export const toPublicAdmin = fromRow;
