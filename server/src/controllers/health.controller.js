export const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'operational',
      service: 'Bluegrid Utilities API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
};
