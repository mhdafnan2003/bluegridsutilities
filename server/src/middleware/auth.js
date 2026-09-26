import { authEnabled, readToken } from '../services/auth.service.js';
import { findAdminById } from '../models/admin.model.js';

/** Requires `Authorization: Bearer <session token>` from the dashboard login. Sets req.admin. */
export const requireAdmin = async (req, res, next) => {
  try {
    if (!authEnabled()) {
      return res.status(503).json({ success: false, error: { message: 'The dashboard is disabled until AUTH_SECRET is configured on the server.' } });
    }
    const header = req.get('authorization') || '';
    const payload = readToken(header.startsWith('Bearer ') ? header.slice(7) : '');
    const admin = payload && (await findAdminById(payload.sub));
    if (!admin) {
      return res.status(401).json({ success: false, error: { message: 'Your session has expired. Please sign in again.' } });
    }
    req.admin = admin;
    return next();
  } catch (err) {
    return next(err);
  }
};
