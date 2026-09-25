import nodemailer from 'nodemailer';
import { config, isProduction } from '../config/index.js';
import { escapeHtml as esc } from '../utils/text.js';

/**
 * Email delivery.
 * - SMTP_USER + SMTP_PASS set  -> real SMTP (SMTP_HOST/PORT/SECURE/FROM).
 * - Not set, production        -> delivery FAILS (503). We never pretend a message was sent.
 * - Not set, development       -> Ethereal test inbox (preview URL logged and returned to the caller),
 *                                 or MAIL_TRANSPORT=json to capture messages in memory with no network.
 */

export class EmailError extends Error {
  constructor(message, statusCode = 502) {
    super(message);
    this.statusCode = statusCode;
    this.isEmailError = true;
  }
}

export const isSmtpConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

let transportPromise = null;

const buildTransport = async () => {
  if (isSmtpConfigured()) {
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE !== 'false' : port === 465;
    return {
      mode: 'smtp',
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port,
        secure,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      }),
    };
  }
  if (isProduction()) return null;

  if (process.env.MAIL_TRANSPORT === 'json') {
    return {
      mode: 'json',
      from: 'Bluegrid Utilities website <no-reply@localhost>',
      transporter: nodemailer.createTransport({ jsonTransport: true }),
    };
  }

  const account = await nodemailer.createTestAccount();
  return {
    mode: 'ethereal',
    from: `"Bluegrid Utilities website" <${account.user}>`,
    transporter: nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: { user: account.user, pass: account.pass },
    }),
  };
};

const getTransport = () => {
  if (!transportPromise) {
    transportPromise = buildTransport().catch((err) => {
      transportPromise = null; // allow a retry next time
      throw err;
    });
  }
  return transportPromise;
};

/**
 * Send one message. Throws EmailError (with an HTTP status) if it cannot be delivered.
 * `fallbackAddress` is the mailbox quoted in the error so the visitor can email us instead.
 */
export const sendMail = async ({ to, subject, text, html, replyTo, attachments, fallbackAddress }) => {
  const fallback = fallbackAddress || to;
  const unavailable = () =>
    new EmailError(`Email delivery is not available right now. Please email ${fallback} directly.`, 503);

  let transport;
  try {
    transport = await getTransport();
  } catch (err) {
    console.error('[Email] Could not create a mail transport:', err.message);
    throw unavailable();
  }
  if (!transport) {
    console.error('[Email] SMTP_USER/SMTP_PASS are not configured; refusing to pretend a message was sent.');
    throw unavailable();
  }

  try {
    const info = await transport.transporter.sendMail({
      from: transport.from,
      to,
      replyTo,
      subject,
      text,
      html,
      attachments,
    });
    const result = { messageId: info.messageId, mode: transport.mode };
    if (transport.mode === 'ethereal') {
      result.previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
      console.log(`[Email] Ethereal preview: ${result.previewUrl}`);
    }
    if (transport.mode === 'json') {
      const parsed = JSON.parse(info.message);
      result.captured = { to: parsed.to, replyTo: parsed.replyTo, subject: parsed.subject, attachments: (parsed.attachments || []).map((a) => a.filename) };
    }
    console.log(`[Email] Sent "${subject}" to ${to} (${transport.mode})`);
    return result;
  } catch (err) {
    console.error(`[Email] Failed to send to ${to}:`, err.message);
    throw new EmailError(`We could not send your message. Please email ${fallback} directly.`, 502);
  }
};

// ---------------------------------------------------------------------------------------------
// Message bodies. Every user-supplied value goes through esc() before it reaches the HTML.
// ---------------------------------------------------------------------------------------------

const row = (label, value) =>
  `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top;color:#475569;font-weight:700;white-space:nowrap">${esc(label)}</th>` +
  `<td style="padding:6px 0;vertical-align:top;color:#111827">${esc(value || 'Not provided').replace(/\n/g, '<br>')}</td></tr>`;

const section = (title, pairs) =>
  `<h2 style="font-size:16px;color:#0F3A5E;margin:24px 0 6px">${esc(title)}</h2><table cellpadding="0" cellspacing="0" style="font-size:15px;line-height:22px">${pairs.map(([l, v]) => row(l, v)).join('')}</table>`;

const wrap = (title, body) =>
  `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(title)}</title></head>` +
  `<body style="font-family:Arial,Helvetica,sans-serif;color:#111827;margin:0;padding:24px;background:#ffffff">` +
  `<h1 style="font-size:20px;color:#0F3A5E;margin:0 0 4px">${esc(title)}</h1>${body}</body></html>`;

export const buildApplicationMessage = (a, cv) => {
  const fmtDate = (iso) => new Date(iso).toLocaleString('en-GB', { timeZone: 'Europe/London' });
  const rows = {
    role: [
      ['Role', a.roleTitle],
      ['Job reference', a.reference],
      ['Application ID', a.id],
      ['Engagement preference', a.engagementRoute],
      ...(a.cisStatus ? [['CIS status', a.cisStatus]] : []),
      ['Submitted', fmtDate(a.submittedAt)],
    ],
    contact: [
      ['First name', a.firstName],
      ['Last name', a.lastName],
      ['Email', a.email],
      ['Telephone', a.phone],
      ['Current town', a.town],
      ['Postcode', a.postcode],
    ],
    work: [
      ['Right to work', a.rightToWork],
      ['Needs visa sponsorship', a.sponsorship],
      ['Driving licence', a.drivingLicence],
    ],
    tickets: [
      ['Cards and tickets held', a.certificates.length ? a.certificates.join('; ') : 'None selected'],
      ['Other tickets', a.otherCertificates],
    ],
    exp: [
      ['Years of relevant experience', a.experienceYears],
      ['Experience summary', a.relevantExperience],
      ['Interview availability', a.interviewAvailability],
      ['Earliest start date', a.startDate],
      ['CV', cv ? `${cv.filename} (${(cv.size / 1024).toFixed(0)} KB, attached)` : 'No CV attached'],
    ],
    decl: [
      ['Role requirements read', 'Yes'],
      ['Declaration confirmed', 'Yes'],
      ['Candidate privacy notice read', 'Yes'],
    ],
  };
  const html = wrap(
    `New application: ${a.roleTitle}`,
    section('Role', rows.role) +
      section('Contact details', rows.contact) +
      section('Right to work and driving', rows.work) +
      section('Tickets and qualifications', rows.tickets) +
      section('Experience and availability', rows.exp) +
      section('Confirmations', rows.decl),
  );
  const textOf = (list) => list.map(([l, v]) => `${l}: ${v || 'Not provided'}`).join('\n');
  const text = [
    `New application: ${a.roleTitle} (${a.reference})`,
    textOf(rows.role),
    '',
    textOf(rows.contact),
    '',
    textOf(rows.work),
    '',
    textOf(rows.tickets),
    '',
    textOf(rows.exp),
    '',
    textOf(rows.decl),
  ].join('\n');
  return {
    subject: `Application ${a.reference}: ${a.fullName} - ${a.roleTitle}`,
    html,
    text,
    attachments: cv ? [{ filename: cv.filename, content: cv.buffer, contentType: cv.contentType }] : undefined,
  };
};

export const buildApplicantConfirmation = (a) => ({
  subject: `We have received your application (${a.reference})`,
  text: [
    `Dear ${a.firstName},`,
    '',
    `Thank you for applying for ${a.roleTitle} at Bluegrid Utilities.`,
    `Job reference: ${a.reference}`,
    `Application ID: ${a.id}`,
    '',
    'Your application has been received by our recruitment team. If you have questions, reply to this email or contact recruitment@bluegridutilities.com and quote your application ID.',
    '',
    'Please do not book or pay for any training courses until you have attended an interview and received written confirmation from Bluegrid Utilities.',
    '',
    'Bluegrid Utilities',
  ].join('\n'),
});

export const buildContactMessage = (c) => {
  const rows = [
    ['Reference', c.id],
    ['Enquiry type', c.enquiryType],
    ['Name', c.name],
    ['Company', c.company],
    ['Email', c.email],
    ['Telephone', c.phone],
    ['Service of interest', c.service],
    ['Subject', c.subject],
    ['Message', c.message],
  ];
  return {
    subject: `Website enquiry ${c.id}: ${c.subject}`,
    html: wrap('New website enquiry', `<table cellpadding="0" cellspacing="0" style="font-size:15px;line-height:22px;margin-top:16px">${rows.map(([l, v]) => row(l, v)).join('')}</table>`),
    text: rows.map(([l, v]) => `${l}: ${v || 'Not provided'}`).join('\n'),
  };
};

export const recipients = () => ({ recruitment: config.recruitmentEmail, enquiries: config.enquiriesEmail });
