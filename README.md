# Bluegrid Utilities - Client/Server Architecture

This repository is structured as a decoupled **Client-Server Architecture**:
- **`client/`**: React 19 + Vite frontend application.
- **`server/`**: Node.js + Express backend API service.

---

## Directory Structure

```
bluegridsutilities/
├── client/                     # Frontend Application
│   ├── public/                 # Static assets & favicon
│   ├── src/                    # React source code (components, pages, assets, data)
│   ├── index.html              # HTML template
│   ├── vite.config.js          # Vite config
│   ├── tailwind.config.js      # Tailwind CSS styling config
│   ├── postcss.config.js       # PostCSS config
│   ├── eslint.config.js        # ESLint rules
│   ├── package.json            # Client dependencies & scripts
│   └── README.md               # Frontend guide
│
├── server/                     # Backend API Service
│   ├── src/
│   │   ├── config/             # Environment & server config
│   │   ├── controllers/        # Route controllers (contact, news, careers, health)
│   │   ├── middleware/         # Error handler, request logger
│   │   ├── routes/             # API routes
│   │   └── app.js              # Express app definition
│   ├── server.js               # Backend entry point (Port 5000)
│   ├── .env.example            # Environment variables template
│   ├── package.json            # Server dependencies & scripts
│   └── README.md               # Backend guide
│
├── package.json                # Root orchestration & workspace scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # Project overview
```

---

## Quick Start Commands (from Root)

### 1. Install All Dependencies
```bash
npm run install:all
```

### 2. Start Frontend & Backend Simultaneously
```bash
npm run dev:all
```

### 3. Start Frontend Only (Vite @ http://localhost:5173)
```bash
npm run dev:client
# or
npm run dev
```

### 4. Start Backend API Only (Express @ http://localhost:5000)
```bash
npm run dev:server
```

### 5. Build Frontend for Production
```bash
npm run build
```

---

## Backend API Endpoints (Port 5000)
- `GET /api/health`: Health status & server uptime.
- `POST /api/contact`: Receive and process contact enquiries.
- `GET /api/news`: Retrieve company news articles.
- `GET /api/careers/vacancies`: List available career roles.
- `POST /api/careers/apply`: Submit job application.
