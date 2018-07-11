const healthCheck = require('./health-check');
const variety = require('./variety');
const measure = require('./measure');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/health-check', healthCheck);
  app.use('/variety', variety);
  app.use('/measure', measure);
};