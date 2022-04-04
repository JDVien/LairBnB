'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
      {
        address: '1428 Elm Street ',
        city: "Springwood",
        state: "Ohio",
        country: "United States",
        name: "The Nightmre on Elm Street House",
        price: '2.00',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '3421 Packanack Lodge ',
        city: "Crystal Lake Township",
        state: "New Jersey",
        country: "United States",
        name: "Jason's Shack",
        price: '4.00',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: 'Somewhere outside Las Vegas  ',
        city: "Top Secret",
        state: "Nevada",
        country: "United States",
        name: "Evil's Secret Underground Base",
        price: '1.00',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});

  }
};
