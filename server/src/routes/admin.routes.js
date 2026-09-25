import { Router } from 'express';
import {
  login,
  me,
  changePassword,
  getOverview,
  getMeta,
  listAllVacancies,
  getVacancy,
  createVacancy,
  editVacancy,
  changeVacancyStatus,
  duplicateVacancy,
  removeVacancy,
  getApplications,
  getApplication,
  updateApplicationStatus,
  addApplicationNote,
  downloadCv,
  removeApplication,
  exportApplications,
} from '../controllers/admin.controller.js';
import { requireAdmin } from '../middleware/auth.js';
import { rateLimit } from '../middleware/rateLimit.js';

const router = Router();

// Dashboard responses contain personal data: never cache them.
router.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

const loginLimiter = rateLimit({ max: 10, windowMs: 15 * 60 * 1000, name: 'sign-in attempts' });
router.post('/auth/login', loginLimiter, login);

// Everything below needs a signed-in dashboard user.
router.use(requireAdmin);

router.get('/auth/me', me);
router.post('/auth/password', changePassword);

router.get('/overview', getOverview);
router.get('/meta', getMeta);

router.get('/vacancies', listAllVacancies);
router.post('/vacancies', createVacancy);
router.get('/vacancies/:id', getVacancy);
router.put('/vacancies/:id', editVacancy);
router.post('/vacancies/:id/status', changeVacancyStatus);
router.post('/vacancies/:id/duplicate', duplicateVacancy);
router.delete('/vacancies/:id', removeVacancy);

router.get('/applications', getApplications);
router.get('/applications/export.csv', exportApplications);
router.get('/applications/:id', getApplication);
router.patch('/applications/:id/status', updateApplicationStatus);
router.post('/applications/:id/notes', addApplicationNote);
router.get('/applications/:id/cv', downloadCv);
router.delete('/applications/:id', removeApplication);

export default router;
