'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.js')[env];
const db        = {};

const authenticate = async connection => {
  try {
    await connection.authenticate();
    console.log(`${config.dialect} DB Successful Connection`);
    return true;
  } catch (error) {
    console.error(`Unable to Connect to the ${config.dialect} DB:`, error);
  }
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

authenticate(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Variety = require('./varieties')(sequelize, Sequelize);
db.Measure = require('./measures')(sequelize, Sequelize);

module.exports = db;
