# Bluegrid Utilities - API server

Express API for the website forms and vacancies, with a SQLite database and the recruitment dashboard API (the dashboard UI is at `/admin` in the client app).

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service status |
| `POST` | `/api/contact` | Contact enquiry (JSON). Emailed to `ENQUIRIES_EMAIL`, or `RECRUITMENT_EMAIL` for recruitment enquiries |
| `GET` | `/api/careers/vacancies` | Open vacancies only (closed or expired are never listed) |
| `GET` | `/api/careers/vacancies/:slug` | One vacancy, with `isOpen` / `isExpired` |
| `POST` | `/api/careers/apply` | Job application, `multipart/form-data`, optional CV in field `cv` |
| `GET` | `/api/news` | Empty list until real articles exist |

### Dashboard API (`/api/admin`, needs `Authorization: Bearer <token>` from login)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/login` | `{ email: <login ID>, password }` → `{ token, expiresAt, user }` (rate limited) |
| `GET` / `POST` | `/auth/me`, `/auth/password` | Current user; change password |
| `GET` | `/overview` | Dashboard numbers: vacancy counts, applications by stage, 30-day trend, latest applications |
| `GET` | `/meta` | Status lists, categories, vacancy picker list |
| `GET` / `POST` | `/vacancies` | List (with application counts) / create (`status`: draft, pending_approval or published) |
| `GET` / `PUT` / `DELETE` | `/vacancies/:id` | Full vacancy with activity log / edit / delete (only if it has no applications) |
| `POST` | `/vacancies/:id/status`, `/vacancies/:id/duplicate` | Change status (logged) / copy as draft |
| `GET` | `/applications` | Filter by `vacancyId`, `status`, `q`, `sort`; paginated with `page`, `pageSize` |
| `GET` | `/applications/export.csv` | Same filters, as a spreadsheet |
| `GET` / `DELETE` | `/applications/:id` | Full application with timeline / permanent delete including CV |
| `PATCH` / `POST` | `/applications/:id/status`, `/applications/:id/notes` | Move stage / add internal note |
| `GET` | `/applications/:id/cv` | Download the CV |

Responses are `{ success, data }` or `{ success: false, error: { message, fields? } }`.

## Database
- SQLite via `better-sqlite3`, file `server/data/bluegrid.db` (override with `DB_PATH`). Tables are created automatically on start.
- The live website vacancy (BG-WM-COV-2026) is seeded automatically when the vacancies table is empty. `npm run seed` inserts any missing seed vacancies; `npm run seed -- --force` resets them to the seed content (applications are kept). Seed content lives in `src/db/seed.js`.
- Applications and CVs are stored in the database. The file is gitignored: it holds candidate personal data, so back it up and keep it private.
- **Hosting:** the database needs a persistent disk (a VPS, or Render/Railway/Fly with a volume and `DB_PATH` pointing at it). Serverless platforms such as Vercel functions have no persistent disk, so data would be lost.

## Dashboard access
- Set `AUTH_SECRET` (required in production) and the login in `.env`: `ADMIN_ID` (email or username), `ADMIN_PASSWORD` (10+ characters), optional `ADMIN_NAME`.
- The `.env` login is applied on every start: change the values and restart to change the ID or password. Changing `ADMIN_ID` removes the old ID's access. This account's password can only be changed in `.env` (`ADMIN_EMAIL` is still accepted in place of `ADMIN_ID`).
- Extra users (managed outside `.env`): `npm run admin:create -- <login ID> <password> [name]`.
- Sessions are signed tokens valid for `SESSION_HOURS` (default 12).

## Delivery rules
- Applications are saved to the database first; the email to `RECRUITMENT_EMAIL` is a notification. If that email fails, the candidate still gets a success response and the dashboard flags the application's failed notification.
- Contact enquiries are not stored: nothing is reported as sent unless the email was actually sent. Failures return 502/503 with a message quoting the mailbox to use instead.
- With `SMTP_USER` and `SMTP_PASS` set, mail goes through your SMTP server.
- Without SMTP settings: in production the form endpoints return **503**; in development an Ethereal test inbox is used, the preview URL is logged and `data.previewUrl` is returned (never in production). Set `MAIL_TRANSPORT=json` in development to capture messages in memory without any network.
- Applications are emailed to `RECRUITMENT_EMAIL` with the CV attached and `replyTo` set to the candidate. If SMTP is configured, a short plain-text confirmation is also sent to the candidate.
- All user-supplied values are trimmed, length-limited and HTML-escaped in email bodies.

## Validation and abuse protection
- CV: max `MAX_UPLOAD_MB` (default 10), extensions `.pdf .doc .docx .jpg .jpeg .png`, MIME allow-list and magic-byte signature check; stored in the database and attached to the notification email.
- Required fields are validated server-side and returned in `error.fields`.
- In-memory rate limit per IP on `/api/contact` and `/api/careers/apply` (`RATE_LIMIT_MAX` per `RATE_LIMIT_WINDOW_MINUTES`, default 5 per 10 minutes). Set `TRUST_PROXY=1` behind a reverse proxy so the real client IP is used.
- Hidden honeypot field `website`: submissions that fill it are silently dropped.
- Duplicate applications (same email and vacancy within 2 minutes) return 409.
- Dashboard: scrypt-hashed passwords, HMAC-signed sessions, rate-limited login, `Cache-Control: no-store` on all dashboard responses.

## Running
```bash
cp .env.example .env   # then edit
npm install
npm run dev            # development with auto-reload (creates and seeds the database)
npm start              # production
npm run seed           # insert missing seed vacancies
npm run admin:create -- another.user 'a-long-password' 'Their Name'
```

Form checks (start the server first; dev mode sends to an Ethereal inbox, not real mailboxes):
```bash
RATE_LIMIT_MAX=25 npm run dev
npm run test:forms     # node scripts/e2e-forms.mjs [http://localhost:5000]
```

## Deployment note
The client's `vercel.json` only rewrites routes to `index.html`, so `/api` needs this server deployed somewhere (or a proxy/rewrite to it). The Vite dev server proxies `/api` to `localhost:5000`.
