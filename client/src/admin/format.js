const TZ = 'Europe/London';

export const fmtDate = (iso) => {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: TZ });
};

export const fmtDateTime = (iso) => {
  if (!iso) return '—';
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? '—'
    : d.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: TZ });
};

export const timeAgo = (iso) => {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (!Number.isFinite(diff)) return '';
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 86400 * 30) return `${Math.floor(diff / 86400)}d ago`;
  return fmtDate(iso);
};

export const daysUntil = (iso) => (iso ? Math.ceil((new Date(iso).getTime() - Date.now()) / 864e5) : null);

export const fmtBytes = (n) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

/** Value for <input type="date"> from an ISO timestamp, in UK time. */
export const toDateInput = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-CA', { timeZone: TZ });
};

// Status vocabularies. `tone` maps to badge colours in ui.jsx; every badge also shows its label.
export const VACANCY_STATUS = {
  draft: { label: 'Draft', tone: 'slate' },
  pending_approval: { label: 'Pending approval', tone: 'amber' },
  published: { label: 'Published', tone: 'green' },
  closed: { label: 'Closed', tone: 'red' },
  archived: { label: 'Archived', tone: 'zinc' },
};

export const APPLICATION_STATUS = {
  new: { label: 'New', tone: 'blue' },
  reviewing: { label: 'Reviewing', tone: 'indigo' },
  shortlisted: { label: 'Shortlisted', tone: 'violet' },
  interview: { label: 'Interview', tone: 'amber' },
  offered: { label: 'Offered', tone: 'teal' },
  hired: { label: 'Hired', tone: 'green' },
  rejected: { label: 'Rejected', tone: 'red' },
  withdrawn: { label: 'Withdrawn', tone: 'zinc' },
};

export const APPLICATION_ORDER = Object.keys(APPLICATION_STATUS);
