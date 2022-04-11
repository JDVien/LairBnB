'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
      {
        review: "Great little cabin. A little homely, too many noisy teens at nearby camp",
        rating: 3,
        userId: 1,
        spotId: 2,
      },
      {
        review: "Keep getting nightmares here. IT'S AWESOME",
        rating: 4,
        userId: 2,
        spotId: 1,
      },
      {
        review: "As lair's go, it's a bit cramped and dated. Prefer Savarin's. At least that one has gardens",
        rating: 2,
        userId: 3,
        spotId: 3,
      },
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
