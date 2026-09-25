import { Router } from 'express';
import {
  getVacancies,
  getVacancyBySlug,
  submitApplication,
} from '../controllers/careers.controller.js';
import { parseApplicationUpload } from '../middleware/upload.js';
import { rateLimit } from '../middleware/rateLimit.js';
import { config } from '../config/index.js';

const router = Router();

const applyLimiter = rateLimit({
  max: config.rateLimitMax,
  windowMs: config.rateLimitWindowMinutes * 60 * 1000,
  name: 'applications',
});

// Public recruitment routes
router.get('/vacancies', getVacancies);
router.get('/vacancies/:slug', getVacancyBySlug);
router.post('/apply', applyLimiter, parseApplicationUpload, submitApplication);

export default router;
