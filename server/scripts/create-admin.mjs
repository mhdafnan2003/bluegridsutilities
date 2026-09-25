// Create a dashboard user, or reset an existing user's password.
// The main login is set with ADMIN_ID / ADMIN_PASSWORD in .env; use this for extra users.
//   npm run admin:create -- <login ID or email> <password> [name]
import { hashPassword, loginIdProblem, passwordProblem } from '../src/services/auth.service.js';
import { createAdmin, findAdminByEmail, setAdminPassword } from '../src/models/admin.model.js';

const [rawId = '', password = '', ...nameParts] = process.argv.slice(2);
const email = rawId.trim().toLowerCase();
const name = nameParts.join(' ') || 'Administrator';

if (!email || loginIdProblem(email)) {
  console.error('Usage: npm run admin:create -- <login ID or email> <password> [name]');
  if (email) console.error(`Login ID rejected: ${loginIdProblem(email)}`);
  process.exit(1);
}
const problem = passwordProblem(password);
if (problem) {
  console.error(`Password rejected: ${problem}`);
  process.exit(1);
}

const existing = findAdminByEmail(email);
if (existing?.env_managed) {
  console.error(`"${existing.email}" is the login set in .env. Change ADMIN_PASSWORD in server/.env and restart the server instead.`);
  process.exit(1);
}
if (existing) {
  setAdminPassword(existing.id, hashPassword(password));
  console.log(`Password reset for ${existing.email}`);
} else {
  const admin = createAdmin({ email, name, passwordHash: hashPassword(password) });
  console.log(`Created dashboard user ${admin.email} (${admin.name})`);
}
