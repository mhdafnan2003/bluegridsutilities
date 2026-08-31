import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from './config/index.js';
import healthRoutes from './routes/health.routes.js';
import contactRoutes from './routes/contact.routes.js';
import newsRoutes from './routes/news.routes.js';
import careersRoutes from './routes/careers.routes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/requestLogger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security and CORS middleware
app.use(cors({
  origin: [config.clientUrl, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(requestLogger);
}

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/careers', careersRoutes);

// Static client serving if built
const clientDistPath = path.resolve(__dirname, '../../client/dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Root test route if client is not built
  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Bluegrid Utilities Backend API',
      docs: {
        health: '/api/health',
        contact: '/api/contact',
        news: '/api/news',
        careers: '/api/careers/vacancies',
      },
    });
  });
}

// 404 & Global Error Handling for API routes
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
