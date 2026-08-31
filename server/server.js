import app from './src/app.js';
import { config } from './src/config/index.js';

const PORT = config.port || 5000;

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Bluegrid Utilities API Server Running`);
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌐 Environment: ${config.nodeEnv}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});
