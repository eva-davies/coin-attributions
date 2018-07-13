'use strict';

module.exports = (sequelize, DataTypes) => {
  const varieties = sequelize.define('varieties', {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    year: DataTypes.STRING(4),
    overtonNumber: DataTypes.STRING(6),
    rarity: DataTypes.STRING(1),
    notes: DataTypes.TEXT('tiny')
  }, {});
  varieties.associate = (models) => {
    varieties.hasMany(models.measures);
  };
  return varieties;
};