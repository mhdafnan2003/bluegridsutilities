import { Router } from 'express';
import {
  getVacancies,
  getVacancyBySlug,
  submitApplication,
  manageGetVacancies,
  manageCreateVacancy,
  manageUpdateStatus,
  managePreviewVacancy
} from '../controllers/careers.controller.js';

const router = Router();

// Public recruitment routes (Points 45, 49, 50, 51)
router.get('/vacancies', getVacancies);
router.get('/vacancies/:slug', getVacancyBySlug);
router.post('/apply', submitApplication);

// Internal CMS / ATS vacancy management routes (Points 46–48, 51, 78)
router.get('/manage/vacancies', manageGetVacancies);
router.post('/manage/vacancies', manageCreateVacancy);
router.post('/manage/vacancies/:id/status', manageUpdateStatus);
router.get('/manage/vacancies/:id/preview', managePreviewVacancy);

export default router;
