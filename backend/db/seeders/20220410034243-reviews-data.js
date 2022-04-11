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
      {
        review: "Needs a makeover. And I didn't dream of Freddy once. Disappointed.",
        rating: 2,
        userId: 1,
        spotId: 1,
      },
      {
        review: "Takes me an hour to walk to the other side of the bunker. I dunno...",
        rating: 3,
        userId: 2,
        spotId: 3,
      },
      {
        review "The owner is weird and had clammy hands. His minion kept kicking me.",
        rating: 2,
        userId: 3,
        spotId: 3,
      },
      {
        review: "Too much fake gold plating on everything",
        rating: 2,
        userId: 1,
        spotId: 4,
      },
      {
        review: "I swore I saw Michael wandering around outside but it was just William Shatner",
        rating: 3,
        userId: 2,
        spotId: 5,
      },
      {
        review: "Creepy and moody, but needs Wifi.",
        rating: 2,
        userId: 3,
        spotId: 2,
      },


    ], {});

  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
