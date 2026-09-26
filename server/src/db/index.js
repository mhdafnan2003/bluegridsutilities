import mongoose from 'mongoose';
import { config } from '../config/index.js';

mongoose.set('strictQuery', true);

// Default location: a local MongoDB instance. Override with MONGODB_URI (e.g. an Atlas connection string).
export const dbUri = config.mongoUri;

// Connecting at import time (with top-level await) means every module that imports this one -
// directly or transitively through db/schemas.js - only finishes loading once MongoDB is reachable.
await mongoose.connect(dbUri);
console.log(`[DB] Connected to MongoDB (${mongoose.connection.name})`);

mongoose.connection.on('error', (err) => console.error('[DB] MongoDB connection error:', err));
mongoose.connection.on('disconnected', () => console.warn('[DB] MongoDB connection lost'));

export const now = () => new Date().toISOString();

/** Escape a string for safe use inside a RegExp (case-insensitive search, etc). */
export const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export { mongoose };
