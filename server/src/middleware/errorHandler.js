export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  // Malformed JSON or oversized body
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, error: { message: 'The request body could not be read.' } });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ success: false, error: { message: 'The request is too large.' } });
  }

  const statusCode = err.statusCode || err.status || 500;
  const isProd = process.env.NODE_ENV === 'production';
  // Do not leak internal error text for 5xx in production.
  const message = statusCode >= 500 && isProd ? 'Internal server error.' : err.message || 'Internal server error.';

  console.error(`[Error] ${req.method} ${req.originalUrl}:`, err);

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(!isProd && statusCode >= 500 && { stack: err.stack }),
    },
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: { message: `Resource not found: ${req.method} ${req.originalUrl}` },
  });
};
