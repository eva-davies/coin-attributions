const healthCheck = require('./health-check');

module.exports = (app) => {
  app.use('/health-check', healthCheck);
};