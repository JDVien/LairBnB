'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: 1,
          image: 'https://images5.fanpop.com/image/photos/29800000/The-Nightmare-On-Elm-Street-house-a-nightmare-on-elm-street-29856265-500-365.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: 2,
          image: 'https://i.imgur.com/zNv82MH.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: 3,
          image: 'https://i.imgur.com/LojtgkE.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
