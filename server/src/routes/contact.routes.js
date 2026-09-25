import { Router } from 'express';
import { submitContactEnquiry } from '../controllers/contact.controller.js';
import { rateLimit } from '../middleware/rateLimit.js';
import { config } from '../config/index.js';

const router = Router();

router.post(
  '/',
  rateLimit({ max: config.rateLimitMax, windowMs: config.rateLimitWindowMinutes * 60 * 1000, name: 'enquiries' }),
  submitContactEnquiry,
);

export default router;
