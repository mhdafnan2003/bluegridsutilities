// Minimal in-memory, per-IP rate limiter (fixed window). Adequate for a single-instance deployment;
// use a shared store (e.g. Redis) if the API is scaled horizontally.

export const rateLimit = ({ windowMs = 10 * 60 * 1000, max = 5, name = 'requests' } = {}) => {
  const hits = new Map();

  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of hits) if (entry.resetAt <= now) hits.delete(key);
  }, windowMs);
  timer.unref?.();

  return (req, res, next) => {
    const key = req.ip || req.socket?.remoteAddress || 'unknown';
    const now = Date.now();
    let entry = hits.get(key);
    if (!entry || entry.resetAt <= now) {
      entry = { count: 0, resetAt: now + windowMs };
      hits.set(key, entry);
    }
    entry.count += 1;
    res.setHeader('X-RateLimit-Limit', String(max));
    res.setHeader('X-RateLimit-Remaining', String(Math.max(0, max - entry.count)));
    if (entry.count > max) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      return res.status(429).json({
        success: false,
        error: { message: `Too many ${name} from this connection. Please wait a few minutes and try again, or email us directly.` },
      });
    }
    return next();
  };
};
