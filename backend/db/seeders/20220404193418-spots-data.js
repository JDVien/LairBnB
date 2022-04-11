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
        userId: '1',
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
        userId: '2',
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
        userId: '3',
        amenities: '25 guest · 25 bedroom · 50 bed · 1 shared bathrooms · Shark Room · Conference Room · Wifi · Kitchen · Free parking · Washing Machine',
        spotType: 'Underground Lair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "A true monster's lair. Only for the worse of us. Old, dated, and smells of desperation. Think twice. Mar-a-Lago is a resort and national historic landmark in Palm Beach, Florida, built from 1924 to 1927 by cereal-company heiress and socialite Marjorie Merriweather Post",
        city: "Palm Beach",
        state: "Florida",
        country: "United States",
        name: "Mar-a-Lago",
        price: 1400,
        userId: '2',
        amenities: '30 guest · 20 bedroom · 50 bed · 20 bathrooms · Locker Room · Conference Room · Wifi · Kitchen · Free parking · Washing Machine',
        spotType: 'Underground Lair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Welcome to the boogeyman's home away from home. The Myers House - North Carolina is a life-size replica of the infamous Michael Myers house from John Carpenter's 1978 horror classic HALLOWEEN.  The house is located in rural Hillsborough, NC and is the personal residence of horror fan Kenny Caperton. Despite being a replica, it has a full suite of amenities to charm the most ardent horror travelers ",
        city: "Haddonfield",
        state: "Illinois",
        country: "United States",
        name: "Myers House",
        price: 400,
        userId: '1',
        amenities: '6 guest · 3 bedroom · 5 bed · 2 shared bathrooms · Patio · Rooms with a view neighborhood · Wifi · Kitchen · heating · Washing Machine',
        spotType: 'Full Home',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Is this cold, hard atmosphere intrinsic to Eighties Manhattan style? In other hands, the kitchen  with its inviting window into the living room  could be a convivial space, a social focus. In Psycho, its the almost industrial, stainless steel backdrop to butchery (bet you dont remember any actual eating taking place in that kitchen; the fridge is just a decapitated head storage system). The all-white bedroom, instead of a pristine place of rest, is a surgical theater. And yet, on its own merits, its a desirable apartment. Take a tour and try humanizing it with your own choice of furnishings... Blood not included.",
        city: "Manhattan",
        state: "New York",
        country: "United States",
        name: "Patrick Bateman's apartment",
        price: 800,
        userId: '3',
        amenities: '2 guest · 2 bedroom · 2 bed · Axe in doorway closet · 1 shared bathrooms · Entertainment Center · Excercise Equipment · Wifi · Kitchen · Free parking · Washing Machine',
        spotType: 'Apartment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "Located in Los Angeles' Griffith Park, the Bronson Cave been used in numerous films and TV shows, perhaps most notably as the Batcave in the campy 1960s TV version of “Batman.” It also appears in the sci-fi horror movie 'Invasion of the Body Snatchers' (1956) as a hiding place from pod people, and where a protagonist makes the gruesome discovery in Eli Roth's zombie horror film 'Cabin Fever' (2002). Converted to leasable domicile in late 2015",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        name: "Cabin Fever Cavern",
        price: 400,
        userId: '1',
        amenities: '6 guest · 1 bedroom · 5 bed · 1 bathrooms  · Natural surroundings · Wifi · Kitchen  · Washing Machine',
        spotType: 'Dungeon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "The Frank Lloyd Wright-designed Ennis House in Los Angeles has appeared in several films and TV shows. In 'House on Haunted Hill' (1959), it's where Frederick Loren (Vincent Price) invites five strangers to stay the night, promising a reward of $10,000 to anyone who can survive until dawn. You might also recognize it as the abandoned home where vampires Angelus, Spike, and Drusilla hole up while terrorizing the town of Sunnydale in the TV series 'Buffy the Vampire Slayer,'' and perhaps most famously as the home of Rick Deckard in 'Blade Runner'(1982) ",
        city: "Los Angeles",
        state: "California",
        country: "United States",
        name: "The House on Haunted Hill",
        price: 600,
        userId: '2',
        amenities: '12 guest · 10 bedroom · 12 bed · 4 bathrooms · Patio · Rooms with a view neighborhood · Wifi · Kitchen · heating · Washing Machine',
        spotType: 'Mansion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "The Dakota is a beautiful apartment building in Manhattan, known to attract the rich and famous. John Lennon and Yoko Ono lived here, and it's outside this building where Lennon was fatally shot in 1980. The building also played a role in the 1968 horror film, 'Rosemarys Baby.' The Dakota serves as the exteriors of The Bramford, an apartment building with a dark past where bad things seem to happen. Despite the rumors, Rosemary Woodhouse agreed to move there with her husband, only to accidentally conceive the son of Satan",
        city: "Manhattan ",
        state: "New York",
        country: "United States",
        name: "Rosemary's Apartment",
        price: 500,
        userId: '3',
        amenities: '2 guest · 1 bedroom · 1 bed · 1 bathrooms · Balcony · Rooms with a view of neighborhood · Wifi · Kitchen · heating · neary shopping centers',
        spotType: 'Apartment',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});

  }
};
