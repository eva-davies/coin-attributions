'use strict';

const varieties = require('./varieties');

module.exports = (sequelize, DataTypes) => {
  const measures = sequelize.define('measures', {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },    
    varietyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {        
        model: varieties,           
        key: 'id',                 
      }
    },
    isObverse: DataTypes.BOOLEAN,
    measureType: DataTypes.STRING(20),
    measureNumber: DataTypes.INTEGER,
    distance: DataTypes.FLOAT,
    angle: DataTypes.FLOAT
  }, {});
  measures.associate = (models) => {
    // associations can be defined here
  };
  return measures;
};