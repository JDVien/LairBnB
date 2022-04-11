'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
      {
        description: 'Despite its nightmarish movie ties, the house can be seen as a dream home, with 3 bedrooms and 4.5 bathrooms, along with a pool and a guest house. It is "a beautiful Dutch Colonial with a modern twist, according to the listing on Realtor.com. The house sits just off of Sunset Boulevard in Los Angeles, a few blocks east of the legendary Chateau Marmont hotel. A Whole Foods is also nearby.',
        city: "Springwood",
        state: "Ohio",
        country: "United States",
        name: "The Nightmre on Elm Street House",
        price: 700,
        userId: 1,
        amenities: '6 guest · 4 bedroom · 4 bed · 3 bathrooms · Wifi · Kitchen · Backyard  Free parking · Entertainment room',
        spotType: 'Full Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'The shack was a rusting, decaying, and battered metal place that was made up of other bits of buildings nearly on the verge of falling down, yet it did not probably due to Jasons upkeep. It had at least one working door which led to the infamous shrine room and one window. The shrine consisted of Pamela Voorhees decapitated head, the sweater and pants that she was wearing when she was killed and a large number of lit candles along with the machete that killed her. Jason also hid the bodies of some of his victims there. A mile down from a Trader Joes',
        city: "Crystal Lake Township",
        state: "New Jersey",
        country: "United States",
        name: "Jason's Shack",
        price: 400,
        userId: 2,
        amenities: '1 guest · 1 bedroom · 1 bed · 0 bathrooms · outhouse · Ritual Podium · Free parking · Nearby Lake',
        spotType: 'Remote Lodging',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Dr. Evil's Lair is just what the title says; the not-very secret lair of Dr. Evil, a purposely stereotypical villain from the Austin Powers films. It is a small island housing a large, active volcano with Dr. Evil's face carved into the side of it, the pupils acting as windows with the interior containing a squad of evil-doers' meeting room. Dr. Evil's Lair destroyed by gadgets, rex salazar's machines, equipments, gizmos, powers and abilities, weapons, vehicles, attacks, wishes, ",
        city: "Top Secret: Las Vegas Location",
        state: "Nevada",
        country: "United States",
        name: "Evil's Secret Underground Base",
        price: 100000,
        userId: 3,
        amenities: '25 guest · 25 bedroom · 50 bed · 1 shared bathrooms · Shark Room · Conference Room · Wifi · Kitchen · Free parking · Washing Machine',
        spotType: 'Underground Lair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});

  }
};
