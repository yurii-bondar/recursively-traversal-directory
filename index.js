const { app } = require('./app/app');
const process = require('process');
process.on('SIGTERM', () => {
  app.close(() => process.exit(0))
});
