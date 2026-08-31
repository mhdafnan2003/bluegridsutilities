# Bluegrid Utilities - Backend API Server

This directory contains the Node.js / Express backend service for Bluegrid Utilities.

## Architecture
- **Framework**: Express.js
- **Pattern**: Controller-Route-Middleware MVC pattern
- **Features**: CORS enabled, Centralized Error Handling, Morgan Logging, Dotenv Config.

## API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & uptime |
| `POST` | `/api/contact` | Submit contact enquiries & quote requests |
| `GET` | `/api/news` | Retrieve company news articles |
| `GET` | `/api/careers/vacancies` | List open positions & roles |
| `POST` | `/api/careers/apply` | Submit job candidate applications |

## Development Scripts
```bash
# Start in development mode with auto-reload (Node.js 18+)
npm run dev

# Start production server
npm start
```
