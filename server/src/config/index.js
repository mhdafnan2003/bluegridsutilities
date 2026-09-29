import dotenv from 'dotenv';

dotenv.config();

const num = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : d);

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  recruitmentEmail: process.env.RECRUITMENT_EMAIL || 'recruitment@bluegridutilities.com',
  enquiriesEmail: process.env.ENQUIRIES_EMAIL || 'enquiries@bluegridutilities.com',
  maxUploadMb: num(process.env.MAX_UPLOAD_MB, 10),
  rateLimitMax: num(process.env.RATE_LIMIT_MAX, 5),
  rateLimitWindowMinutes: num(process.env.RATE_LIMIT_WINDOW_MINUTES, 10),
  trustProxy: process.env.TRUST_PROXY || '',
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bluegrid',
  // Admin dashboard sessions
  authSecret: process.env.AUTH_SECRET || '',
  sessionHours: num(process.env.SESSION_HOURS, 12),
  // CV storage (Cloudinary). If unset, CVs are stored as binary data in MongoDB instead (fine for
  // development; in production, set these so the database only holds a reference to each CV).
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || '',
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || '',
};

export const isProduction = () => config.nodeEnv === 'production';
