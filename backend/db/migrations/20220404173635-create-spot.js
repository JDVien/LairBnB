'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        references: { model: "Users" },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(3,2)
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
