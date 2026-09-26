import crypto from 'crypto';
import { config, isProduction } from '../config/index.js';
import { countAdmins, createAdmin, findAdminByEmail, removeStaleEnvAdmins, setAdminPassword, updateEnvAdmin } from '../models/admin.model.js';

// Passwords: scrypt with a per-user salt, stored as "scrypt$<salt>$<hash>".
const KEY_LEN = 64;

export const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, KEY_LEN).toString('hex');
  return `scrypt$${salt}$${hash}`;
};

export const verifyPassword = (password, stored) => {
  const [scheme, salt, hash] = String(stored || '').split('$');
  if (scheme !== 'scrypt' || !salt || !hash) return false;
  const expected = Buffer.from(hash, 'hex');
  const actual = crypto.scryptSync(password, salt, expected.length);
  return crypto.timingSafeEqual(expected, actual);
};

export const passwordProblem = (password) => {
  if (typeof password !== 'string' || password.length < 10) return 'Use at least 10 characters.';
  if (password.length > 200) return 'Use 200 characters or fewer.';
  return null;
};

// Sessions: "<base64url payload>.<base64url HMAC>". Stateless, expire after SESSION_HOURS.
// Without AUTH_SECRET a random per-process secret is used in development (sessions end on restart);
// in production the dashboard is disabled until AUTH_SECRET is set.
let secret = config.authSecret;
if (!secret && !isProduction()) {
  secret = crypto.randomBytes(32).toString('hex');
  console.warn('[Auth] AUTH_SECRET not set - using a temporary secret. Dashboard sessions end when the server restarts.');
}

export const authEnabled = () => Boolean(secret);

const sign = (data) => crypto.createHmac('sha256', secret).update(data).digest('base64url');

export const issueToken = (admin) => {
  const payload = { sub: admin.id, email: admin.email, name: admin.name, exp: Date.now() + config.sessionHours * 3600e3 };
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return { token: `${body}.${sign(body)}`, expiresAt: new Date(payload.exp).toISOString() };
};

export const readToken = (token) => {
  if (!secret || typeof token !== 'string') return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  const expected = Buffer.from(sign(body));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    return payload.exp > Date.now() ? payload : null;
  } catch {
    return null;
  }
};

/** Login IDs are an email address or a username: 3-254 letters, numbers and . _ @ + - */
export const loginIdProblem = (id) => (/^[a-z0-9._@+-]{3,254}$/i.test(id) ? null : 'Use 3-254 letters, numbers or . _ @ + - (no spaces).');

/**
 * Apply the dashboard login from .env on every start: ADMIN_ID (or ADMIN_EMAIL) + ADMIN_PASSWORD.
 * - The account is created if missing, and its password and name are updated to match .env.
 * - If ADMIN_ID changes, the account set up under the old ID is removed, so the old login stops working.
 * - Accounts created with `npm run admin:create` are not touched.
 */
export const syncEnvAdmin = async () => {
  const loginId = (process.env.ADMIN_ID || process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || '';
  const name = (process.env.ADMIN_NAME || '').trim() || 'Administrator';

  if (!loginId && !password) {
    if ((await countAdmins()) === 0) console.warn('[Auth] No dashboard login yet. Set ADMIN_ID and ADMIN_PASSWORD in server/.env and restart.');
    return;
  }
  if (!loginId || !password) {
    console.error('[Auth] Set both ADMIN_ID and ADMIN_PASSWORD in server/.env - the dashboard login from .env was not applied.');
    return;
  }
  const idProblem = loginIdProblem(loginId);
  const pwProblem = passwordProblem(password);
  if (idProblem || pwProblem) {
    console.error(`[Auth] ${idProblem ? `ADMIN_ID: ${idProblem}` : `ADMIN_PASSWORD: ${pwProblem}`} The dashboard login from .env was not applied.`);
    return;
  }

  const existing = await findAdminByEmail(loginId);
  if (!existing) {
    await createAdmin({ email: loginId, name, passwordHash: hashPassword(password), envManaged: true });
    console.log(`[Auth] Dashboard login "${loginId}" created from .env`);
  } else {
    if (!verifyPassword(password, existing.password_hash)) {
      await setAdminPassword(existing.id, hashPassword(password));
      console.log(`[Auth] Dashboard password for "${loginId}" updated from .env`);
    }
    await updateEnvAdmin(existing.id, name);
  }
  for (const old of await removeStaleEnvAdmins(loginId)) console.log(`[Auth] Removed old dashboard login "${old}" (ADMIN_ID changed)`);
};
