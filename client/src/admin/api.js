// Small fetch wrapper for the dashboard API (/api/admin). Sends the session token and turns
// error responses into thrown ApiError objects carrying the server's message and field errors.

const TOKEN_KEY = 'bg_admin_session';

export class ApiError extends Error {
  constructor(message, status, fields) {
    super(message);
    this.status = status;
    this.fields = fields || {};
  }
}

export const session = {
  get() {
    try {
      const s = JSON.parse(localStorage.getItem(TOKEN_KEY) || 'null');
      return s && new Date(s.expiresAt).getTime() > Date.now() ? s : null;
    } catch {
      return null;
    }
  },
  set(value) {
    try { localStorage.setItem(TOKEN_KEY, JSON.stringify(value)); } catch { /* storage unavailable */ }
  },
  clear() {
    try { localStorage.removeItem(TOKEN_KEY); } catch { /* storage unavailable */ }
  },
};

let onUnauthorized = () => {};
export const setUnauthorizedHandler = (fn) => { onUnauthorized = fn; };

const request = async (path, { method = 'GET', body, raw = false } = {}) => {
  const headers = { Accept: 'application/json' };
  const token = session.get()?.token;
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  let res;
  try {
    res = await fetch(`/api/admin${path}`, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined });
  } catch {
    throw new ApiError('Could not reach the server. Check your connection and try again.', 0);
  }
  if (res.status === 401 && path !== '/auth/login') {
    session.clear();
    onUnauthorized();
  }
  if (raw && res.ok) return res;
  const type = res.headers.get('content-type') || '';
  const data = type.includes('application/json') ? await res.json().catch(() => null) : null;
  // A non-JSON 502/503/504 comes from the dev proxy or hosting platform, not from our API.
  if (!data && [502, 503, 504].includes(res.status)) {
    throw new ApiError('Cannot reach the API server. Make sure the backend is running (npm run dev:server, or npm run dev:all for both), then try again.', res.status);
  }
  if (!res.ok || !data?.success) {
    throw new ApiError(data?.error?.message || `Request failed (${res.status}).`, res.status, data?.error?.fields);
  }
  return data;
};

export const api = {
  get: (path) => request(path),
  post: (path, body = {}) => request(path, { method: 'POST', body }),
  put: (path, body) => request(path, { method: 'PUT', body }),
  patch: (path, body) => request(path, { method: 'PATCH', body }),
  del: (path) => request(path, { method: 'DELETE' }),
  /** Download a file from an authenticated endpoint. */
  async download(path, fallbackName) {
    const res = await request(path, { raw: true });
    const disposition = res.headers.get('content-disposition') || '';
    const match = /filename\*=UTF-8''([^;]+)/i.exec(disposition) || /filename="([^"]+)"/i.exec(disposition);
    const name = match ? decodeURIComponent(match[1]) : fallbackName;
    const url = URL.createObjectURL(await res.blob());
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },
};

export const qs = (params) => {
  const s = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== null && v !== '') s.set(k, v);
  const str = s.toString();
  return str ? `?${str}` : '';
};
