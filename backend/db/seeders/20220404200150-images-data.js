'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: '1',
          image: 'https://images5.fanpop.com/image/photos/29800000/The-Nightmare-On-Elm-Street-house-a-nightmare-on-elm-street-29856265-500-365.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: '2',
          image: 'https://i.imgur.com/zNv82MH.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          spotId: '3',
          image: 'https://i.imgur.com/LojtgkE.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '4',
          image: 'https://i.imgur.com/5wsO2L7.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '5',
          image: 'https://i.imgur.com/N4AHT6Z.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '6',
          image: 'https://i.imgur.com/mQe0ffK.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '7',
          image: 'https://i.imgur.com/lh8pYZO.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '8',
          image: 'https://i.imgur.com/si2TBBR.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          spotId: '9',
          image: 'https://i.imgur.com/g3npMGK.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
