'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('measures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      varietyId: {
        type: Sequelize.INTEGER,
        allowNull: false,       
      },
      isObverse: {
        type: Sequelize.BOOLEAN
      },
      measureType: {
        type: Sequelize.STRING(20)
      },
      measureNumber: {
        type: Sequelize.INTEGER
      },
      distance: {
        type: Sequelize.FLOAT
      },
      angle: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('measures');
  }
};