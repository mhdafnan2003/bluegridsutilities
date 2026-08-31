import { Router } from 'express';
import { getVacancies, submitApplication } from '../controllers/careers.controller.js';

const router = Router();

router.get('/vacancies', getVacancies);
router.post('/apply', submitApplication);

export default router;
