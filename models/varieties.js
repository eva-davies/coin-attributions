'use strict';

module.exports = (sequelize, DataTypes) => {
  const Variety = sequelize.define('varieties', {
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
  Variety.associate = (models) => {
    Variety.hasMany(models.measures);
  };
  return Variety;
};