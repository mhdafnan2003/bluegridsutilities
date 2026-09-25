// End-to-end checks for the contact and careers form endpoints.
// Starts nothing itself: run the API first (dev mode uses an Ethereal test inbox, so no real email is sent):
//   node server.js            (in one terminal; use RATE_LIMIT_MAX=30 to leave room for the checks)
//   node scripts/e2e-forms.mjs [http://localhost:5000]
import { buildContactMessage, buildApplicationMessage } from '../src/services/email.service.js';

const BASE = process.argv[2] || process.env.API_URL || 'http://localhost:5000';
let failures = 0;
const previews = [];

const check = (name, ok, detail = '') => {
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  -  ${detail}` : ''}`);
};

const postJson = async (url, body) => {
  const res = await fetch(BASE + url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json().catch(() => ({})), headers: res.headers };
};

const postForm = async (fields, file) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) {
    if (Array.isArray(v)) v.forEach((x) => fd.append(k, x));
    else fd.append(k, v);
  }
  if (file) fd.append(file.field || 'cv', new Blob([file.content], { type: file.type }), file.name);
  const res = await fetch(BASE + '/api/careers/apply', { method: 'POST', body: fd });
  return { status: res.status, body: await res.json().catch(() => ({})), headers: res.headers };
};

const tinyPdf = Buffer.from('%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF\n');
const nextDay = new Date(Date.now() + 14 * 864e5).toISOString().slice(0, 10);
const stamp = Date.now();

const validApplication = (over = {}) => ({
  roleSlug: 'water-meter-installation-operative',
  engagementRoute: 'Permanent full-time (PAYE employment)',
  firstName: 'Test',
  lastName: 'Candidate',
  email: `candidate+${stamp}@example.com`,
  phone: '07123 456789',
  town: 'Coventry',
  postcode: 'CV1 2AB',
  rightToWork: 'I have the right to work in the UK without restriction',
  sponsorship: 'No',
  drivingLicence: 'Full UK driving licence (no endorsements)',
  certificates: ['EUSR National Water Hygiene card', 'Manual Handling'],
  otherCertificates: '',
  relevantExperience: 'Two years of groundworks. <b>bold</b>',
  experienceYears: '1 to 2 years',
  interviewAvailability: 'Weekdays during working hours',
  startDate: nextDay,
  roleRequirements: 'true',
  declaration: 'true',
  privacy: 'true',
  ...over,
});
const pdf = (name = 'cv.pdf') => ({ name, type: 'application/pdf', content: tinyPdf });

const validContact = {
  name: 'Test Visitor',
  email: 'visitor@example.com',
  phone: '',
  company: 'Example Ltd',
  enquiryType: 'General enquiry',
  subject: 'Test enquiry',
  message: 'This is a test enquiry message.',
  privacyConsent: true,
};

const run = async () => {
  console.log(`Target: ${BASE}\n`);

  // News must not invent articles
  const news = await fetch(`${BASE}/api/news`).then((r) => r.json());
  check('GET /api/news returns an empty list', news.success && news.count === 0 && news.data.length === 0);

  const vac = await fetch(`${BASE}/api/careers/vacancies`).then((r) => r.json());
  check('GET /api/careers/vacancies lists the open vacancy', vac.success && vac.count >= 1 && vac.data[0].reference === 'BG-WM-COV-2026');

  // ---- Contact ----
  let r = await postJson('/api/contact', validContact);
  check('valid contact enquiry -> 201 with reference', r.status === 201 && r.body.success && /^ENQ-/.test(r.body.data?.referenceNumber || ''), `status ${r.status} ${r.body.data?.referenceNumber || r.body.error?.message || ''}`);
  if (r.body.data?.previewUrl) previews.push(['contact', r.body.data.previewUrl]);
  check('contact enquiry routed to ENQUIRIES_EMAIL', r.body.data?.delivery?.to === 'enquiries@bluegridutilities.com' || r.body.data?.delivery?.to === process.env.ENQUIRIES_EMAIL, r.body.data?.delivery?.to);

  r = await postJson('/api/contact', { ...validContact, enquiryType: 'Recruitment enquiry' });
  check('recruitment contact enquiry routed to RECRUITMENT_EMAIL', r.status === 201 && /recruitment@/.test(r.body.data?.delivery?.to || ''), r.body.data?.delivery?.to);

  r = await postJson('/api/contact', { name: '', email: 'not-an-email', subject: '', message: 'short', privacyConsent: false });
  check('invalid contact -> 400 with fields map', r.status === 400 && !r.body.success && ['name', 'email', 'subject', 'message', 'privacyConsent'].every((f) => r.body.error?.fields?.[f]), `fields: ${Object.keys(r.body.error?.fields || {}).join(', ')}`);

  r = await postJson('/api/contact', { ...validContact, website: 'http://spam.example' });
  check('honeypot contact is silently dropped (no delivery)', r.status === 201 && !r.body.data?.delivery);

  // ---- Applications ----
  r = await postForm(validApplication(), pdf('candidate cv.pdf'));
  const ok = r.status === 201 && r.body.success;
  check('valid application with PDF -> 201', ok, `status ${r.status} ${r.body.data?.applicationId || r.body.error?.message || ''}`);
  check('response has application ID and job reference', /^APP-/.test(r.body.data?.applicationId || '') && r.body.data?.reference === 'BG-WM-COV-2026');
  const del = r.body.data?.delivery;
  check('application sent to RECRUITMENT_EMAIL', /recruitment@/.test(del?.to || '') || del?.to === process.env.RECRUITMENT_EMAIL, del?.to);
  check('CV attachment present on the sent message', (del?.attachments || []).includes('candidate cv.pdf') && (!del?.captured || del.captured.attachments.includes('candidate cv.pdf')), JSON.stringify(del?.captured?.attachments || del?.attachments));
  if (r.body.data?.previewUrl) {
    previews.push(['application', r.body.data.previewUrl]);
    try {
      const html = await fetch(r.body.data.previewUrl).then((x) => x.text());
      check('Ethereal preview page lists the attachment', html.includes('candidate cv.pdf'));
    } catch (e) {
      check('Ethereal preview page reachable', false, e.message);
    }
  }
  check('replyTo is the candidate address', del?.captured ? JSON.stringify(del.captured.replyTo || '').includes('candidate+') : true, del?.captured ? '' : 'not captured in this transport mode (set in code)');

  const dup = await postForm(validApplication(), pdf());
  check('duplicate rapid submission -> 409', dup.status === 409, `status ${dup.status}`);

  r = await postForm(validApplication({ email: `bad-type+${stamp}@example.com` }), { name: 'virus.exe', type: 'application/x-msdownload', content: Buffer.from('MZ....') });
  check('disallowed file type (.exe) -> 400', r.status === 400 && !!r.body.error?.fields?.cv, r.body.error?.message);

  r = await postForm(validApplication({ email: `spoof+${stamp}@example.com` }), { name: 'fake.pdf', type: 'application/pdf', content: Buffer.from('this is not a pdf at all') });
  check('file with wrong magic bytes (.pdf that is not a PDF) -> 400', r.status === 400 && !!r.body.error?.fields?.cv, r.body.error?.message);

  r = await postForm(validApplication({ email: `mime+${stamp}@example.com` }), { name: 'cv.pdf', type: 'text/html', content: tinyPdf });
  check('MIME type not on allow-list -> 400', r.status === 400, r.body.error?.message);

  const big = Buffer.concat([tinyPdf, Buffer.alloc(10 * 1024 * 1024 + 10, 0x20)]);
  r = await postForm(validApplication({ email: `big+${stamp}@example.com` }), { name: 'big.pdf', type: 'application/pdf', content: big });
  check('oversize file (>10 MB) -> 400', r.status === 400 && /larger|MB/i.test(r.body.error?.message || ''), r.body.error?.message);

  r = await postForm(validApplication({ email: `field+${stamp}@example.com` }), { ...pdf(), field: 'attachment' });
  check('unexpected file field name -> 400', r.status === 400, r.body.error?.message);

  r = await postForm(validApplication({ email: `nodecl+${stamp}@example.com`, declaration: 'false' }), pdf());
  check('missing declaration -> 400 with fields.declaration', r.status === 400 && !!r.body.error?.fields?.declaration, r.body.error?.message);

  r = await postForm(validApplication({ email: `nopriv+${stamp}@example.com`, privacy: '' }), pdf());
  check('missing privacy confirmation -> 400 with fields.privacy', r.status === 400 && !!r.body.error?.fields?.privacy);

  r = await postForm({ roleSlug: 'water-meter-installation-operative', firstName: '', lastName: '', email: 'x', phone: '1', town: '', postcode: 'NOTAPOSTCODE' });
  const f = r.body.error?.fields || {};
  check('empty/invalid required fields -> 400 with each field reported', r.status === 400 && ['firstName', 'lastName', 'email', 'phone', 'town', 'postcode', 'rightToWork', 'sponsorship', 'drivingLicence', 'interviewAvailability', 'engagementRoute', 'roleRequirements', 'declaration', 'privacy'].every((k) => f[k]), Object.keys(f).join(', '));

  r = await postForm(validApplication({ roleSlug: 'no-such-role', email: `role+${stamp}@example.com` }), pdf());
  check('unknown vacancy -> 400', r.status === 400);

  r = await postForm(validApplication({ email: `nocv+${stamp}@example.com` }));
  check('application without a CV is accepted (CV optional)', r.status === 201, `status ${r.status}`);

  r = await postForm(validApplication({ email: `honey+${stamp}@example.com`, website: 'spam' }), pdf());
  check('honeypot application is silently dropped', r.status === 201 && !r.body.data?.delivery);

  // ---- HTML escaping in email bodies (unit level) ----
  const evil = '<img src=x onerror=alert(1)>"&';
  const c = buildContactMessage({ id: 'ENQ-1', enquiryType: evil, name: evil, company: evil, email: 'a@b.co', phone: '', service: '', subject: evil, message: evil });
  check('contact email HTML escapes user input', !c.html.includes('<img') && c.html.includes('&lt;img'));
  const a = buildApplicationMessage({ id: 'APP-1', roleTitle: 'Role', reference: 'R', engagementRoute: evil, fullName: evil, firstName: evil, lastName: evil, email: 'a@b.co', phone: '1234567', town: evil, postcode: evil, rightToWork: evil, sponsorship: 'No', drivingLicence: evil, certificates: [evil], otherCertificates: evil, relevantExperience: evil, experienceYears: '', interviewAvailability: evil, startDate: '', submittedAt: new Date().toISOString() }, null);
  check('application email HTML escapes user input', !a.html.includes('<img') && a.html.includes('&lt;img'));

  // ---- Rate limiting (last, it consumes the window) ----
  let limited = 0;
  let limit = '?';
  for (let i = 0; i < 60 && !limited; i += 1) {
    const x = await postJson('/api/contact', { name: '' });
    limit = x.headers.get('x-ratelimit-limit') || limit;
    if (x.status === 429) limited = i + 1;
  }
  check('rate limiting returns 429 after repeated requests', limited > 0, limited ? `429 after ${limited} extra requests (limit ${limit}/window)` : 'never limited');

  console.log(`\n${failures ? `${failures} check(s) FAILED` : 'All checks passed'}`);
  if (previews.length) {
    console.log('\nEthereal preview URLs:');
    previews.forEach(([k, u]) => console.log(`  ${k}: ${u}`));
  }
  process.exit(failures ? 1 : 0);
};

run().catch((e) => {
  console.error('Test run crashed:', e);
  process.exit(2);
});
