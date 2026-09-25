# Bluegrid Utilities - API server

Express API for the website forms and vacancies.

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service status |
| `POST` | `/api/contact` | Contact enquiry (JSON). Emailed to `ENQUIRIES_EMAIL`, or `RECRUITMENT_EMAIL` for recruitment enquiries |
| `GET` | `/api/careers/vacancies` | Open vacancies only (closed or expired are never listed) |
| `GET` | `/api/careers/vacancies/:slug` | One vacancy, with `isOpen` / `isExpired` |
| `POST` | `/api/careers/apply` | Job application, `multipart/form-data`, optional CV in field `cv` |
| `GET` | `/api/news` | Empty list until real articles exist |

Responses are `{ success, data }` or `{ success: false, error: { message, fields? } }`.

## Delivery rules
- Nothing is reported as sent unless the email was actually sent. Failures return 502/503 with a message quoting the mailbox to use instead.
- With `SMTP_USER` and `SMTP_PASS` set, mail goes through your SMTP server.
- Without SMTP settings: in production the form endpoints return **503**; in development an Ethereal test inbox is used, the preview URL is logged and `data.previewUrl` is returned (never in production). Set `MAIL_TRANSPORT=json` in development to capture messages in memory without any network.
- Applications are emailed to `RECRUITMENT_EMAIL` with the CV attached and `replyTo` set to the candidate. If SMTP is configured, a short plain-text confirmation is also sent to the candidate.
- All user-supplied values are trimmed, length-limited and HTML-escaped in email bodies.

## Validation and abuse protection
- CV: max `MAX_UPLOAD_MB` (default 10), extensions `.pdf .doc .docx .jpg .jpeg .png`, MIME allow-list and magic-byte signature check; stored in memory only and sent as an email attachment (nothing is written to disk).
- Required fields are validated server-side and returned in `error.fields`.
- In-memory rate limit per IP on `/api/contact` and `/api/careers/apply` (`RATE_LIMIT_MAX` per `RATE_LIMIT_WINDOW_MINUTES`, default 5 per 10 minutes). Set `TRUST_PROXY=1` behind a reverse proxy so the real client IP is used.
- Hidden honeypot field `website`: submissions that fill it are silently dropped.
- Duplicate applications (same email and vacancy within 2 minutes) return 409.
- `/api/careers/manage/*` is disabled unless `ADMIN_TOKEN` is set, then needs `Authorization: Bearer <ADMIN_TOKEN>`.

## Running
```bash
cp .env.example .env   # then edit
npm install
npm run dev            # development with auto-reload
npm start              # production
```

Form checks (start the server first; dev mode sends to an Ethereal inbox, not real mailboxes):
```bash
RATE_LIMIT_MAX=25 npm run dev
npm run test:forms     # node scripts/e2e-forms.mjs [http://localhost:5000]
```

## Deployment note
The client's `vercel.json` only rewrites routes to `index.html`, so `/api` needs this server deployed somewhere (or a proxy/rewrite to it). The Vite dev server proxies `/api` to `localhost:5000`.
