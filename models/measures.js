'use strict';

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
    },
    isObverse: DataTypes.BOOLEAN,
    measureType: DataTypes.STRING(20),
    measureNumber: DataTypes.INTEGER,
    distance: DataTypes.FLOAT,
    angle: DataTypes.FLOAT
  }, {});
  measures.associate = (models) => {        
    
  };
  return measures;
};