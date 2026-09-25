import { Router } from 'express';
import {
  getVacancies,
  getVacancyBySlug,
  submitApplication,
  requireAdmin,
  manageGetVacancies,
  manageCreateVacancy,
  manageUpdateStatus,
  managePreviewVacancy,
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

// Vacancy management: disabled unless ADMIN_TOKEN is set, then bearer-token protected
router.use('/manage', requireAdmin);
router.get('/manage/vacancies', manageGetVacancies);
router.post('/manage/vacancies', manageCreateVacancy);
router.post('/manage/vacancies/:id/status', manageUpdateStatus);
router.get('/manage/vacancies/:id/preview', managePreviewVacancy);

export default router;
