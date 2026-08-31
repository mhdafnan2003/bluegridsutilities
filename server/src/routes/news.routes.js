import { Router } from 'express';
import { getNewsArticles } from '../controllers/news.controller.js';

const router = Router();

router.get('/', getNewsArticles);

export default router;
