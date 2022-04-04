'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: '1',
          url: 'https://images5.fanpop.com/image/photos/29800000/The-Nightmare-On-Elm-Street-house-a-nightmare-on-elm-street-29856265-500-365.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: '2',
          url: 'https://static.wikia.nocookie.net/fridaythe13th/images/1/14/VHouse.jpg/revision/latest?cb=20100123212829',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: '3',
          url: 'https://preview.redd.it/hkw8bmv5ywo01.jpg?width=640&crop=smart&auto=webp&s=e5e1a34197df729ec87d92656bd71f9e05946536',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
