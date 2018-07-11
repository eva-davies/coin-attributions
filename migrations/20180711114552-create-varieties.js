'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('varieties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING(4)
      },
      overtonNumber: {
        type: Sequelize.STRING(6)
      },
      rarity: {
        type: Sequelize.STRING(1)
      },
      notes: {
        type: Sequelize.TEXT('tiny')
      },
      createdAt: {        
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {        
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('varieties');
  }
};