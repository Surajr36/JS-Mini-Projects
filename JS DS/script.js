'use strict';

// Data needed for a later exercise
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// // console.log(newArr);

// const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(totalMenu);

// const [pizza, , risotto, ...rest] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(rest);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starterC, mainC] = restaurant.order(2, 0);
// console.log(starterC, mainC);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   menu: m = [],
//   name: restName,
//   openingHours: hours,
//   categories: cat,
// } = restaurant;
// console.log(m, restName, hours, cat);

// const {
//   fri: { open: o, close: c },
// } = hours;
// console.log(o, c);

/** CODING CHALLENGE 1 **/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [team1gk, ...fieldPlayers1] = players1;
// const [team2gk, ...fieldPlayers2] = players2;
// const allPlayers = [...players1, ...players2];
// const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   // console.log(players, players.length);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // console.log(`Goal ${i + 1}: ${el}`);

// for (const [i, el] of game.scored.entries()) var oddavg = 0;
// for (const [keys, values] of Object.entries(game.odds)) {
//   oddavg += values;
//   // console.log(`Odds of victory of $`);
// }

// oddavg /= 3;
// // console.log(oddavg);
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// // console.log(scorers);

// const orders = new Set(['Dosa', 'Dosa', 'Idly', 'Pasta', 'Idly', 'Pasta']);
// // console.log(orders.has('Chapati'));
// orders.add('Chapati');
// orders.add('Chapati');
// // console.log(orders.size);
// // console.log(orders.has('Chapati'));
// // console.log(orders);

// let rest = new Map();

// rest
//   .set('categories', restaurant.categories)
//   .set('open', 11)
//   .set('close', 20)
//   .set(true, "We're open boss")
//   .set(false, 'Closed bruhh');

// const time = 13;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const uniqueEvent = [...new Set(gameEvents.values())];
// console.log(uniqueEvent);
// const events = [...gameEvents];
// // console.log(events);

// gameEvents.delete(64);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // for (let ele of events) {
// //   if (ele[0] <= 45) console.log("It's in the first half");
// //   else console.log("It's in the second half");
// // }

// let name = 'Suraj Ragu';
// console.log(name.slice(-4));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const text = 'Suraj_ragu,Mukesh_kanna';
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const words = text.split('\n');
  for (const [j, word] of words.entries()) {
    const i = word.indexOf('_');
    const rightWord =
      word.slice(0, i) +
      word[i + 1].toUpperCase() +
      word.slice(i + 2) +
      '\t' +
      '❌'.repeat(j + 1);
    console.log(rightWord);
  }
});
// console.log(text);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  // const [departStatus,]
  const infos = flight.split(';');
  const departStatus = infos[0].slice(1).replace('_', ' ');
  const [from, to] = [
    infos[1].slice(0, 3).toUpperCase(),
    infos[2].slice(0, 3).toUpperCase(),
  ];
  const [hours, min] = infos[3].split(':');
  console.log(
    `${
      departStatus.includes('Delayed') ? '⭕' : ''
    } ${departStatus} from ${from} to ${to} (${hours}h${min}m)`.padStart(40)
  );

  // console.log(time);
}
