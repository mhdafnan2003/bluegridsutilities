// Small helpers for cleaning and escaping user-supplied text.

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;' };

/** Escape a value for safe inclusion in HTML (element text or quoted attribute). */
export const escapeHtml = (value) => String(value ?? '').replace(/[&<>"'`]/g, (ch) => HTML_ESCAPES[ch]);

/** Trim, drop control characters (keeping newlines/tabs when multiline) and cap the length. */
export const clean = (value, max = 200, { multiline = false } = {}) => {
  if (value === undefined || value === null) return '';
  let s = Array.isArray(value) ? String(value[0] ?? '') : String(value);
  s = multiline
    ? s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    : s.replace(/[\u0000-\u001F\u007F]/g, ' ');
  return s.trim().slice(0, max);
};

/** Turn a value into a clean array of strings (repeated form fields arrive as string or array). */
export const cleanList = (value, maxItems = 20, maxLen = 120) => {
  if (value === undefined || value === null || value === '') return [];
  const arr = Array.isArray(value) ? value : [value];
  return arr.map((v) => clean(v, maxLen)).filter(Boolean).slice(0, maxItems);
};

export const EMAIL_RE = /^[^\s@,;<>()]+@[^\s@,;<>()]+\.[^\s@,;<>()]{2,}$/;
export const isEmail = (s) => s.length <= 254 && EMAIL_RE.test(s);
/** Loose phone check: 7-25 characters of digits, spaces, + ( ) . - with at least 7 digits. */
export const isPhone = (s) => /^[0-9+()\s.-]{7,25}$/.test(s) && (s.match(/\d/g) || []).length >= 7;

export const isTrue = (v) => v === true || v === 'true' || v === 'on' || v === '1';

export const newReference = (prefix) =>
  `${prefix}-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;
