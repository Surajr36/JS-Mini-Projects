"use strict";
// function describeCountry(country, population, capitalCity) {
//   const ret = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return ret;
// }
// let ind = describeCountry("India", 1200, "New Delhi");
// let fin = describeCountry("Finland", 6, "Helsinki");
// let usa = describeCountry("US", 120, "NYC");
// console.log(ind, "\n", fin, "\n", usa);
// let worldPop = 7900;
// function percentageOfWorld1(population) {
//   return (population / worldPop) * 100;
// }
// let indpop = percentageOfWorld1(1200);
// let finpop = percentageOfWorld1(6);
// let usapop = percentageOfWorld1(120);

// console.log(indpop, finpop, usapop);

// const percentageOfWorld2 = function (population) {
//   return (population / worldPop) * 100;
// };
// indpop = percentageOfWorld2(12001);
// finpop = percentageOfWorld2(60);
// usapop = percentageOfWorld2(1200);

// console.log(indpop, finpop, usapop);

// const percentageOfWorld3 = (population) => (population / worldPop) * 100;
// indpop = percentageOfWorld3(1200);
// finpop = percentageOfWorld3(6);
// usapop = percentageOfWorld3(120);

// console.log(indpop, finpop, usapop);

// let dScore1 = 85,
//   dScore2 = 54,
//   dScore3 = 41;

// let kScore1 = 23,
//   kScore2 = 34,
//   kScore3 = 27;

// let dAvg, kAvg;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// dAvg = calcAverage(dScore1, dScore2, dScore3);
// kAvg = calcAverage(kScore1, kScore2, kScore3);

// function checkWinner(dAvg, kAvg) {
//   if (kAvg > 2 * dAvg) console.log(`Koalas win (${dAvg} vs ${kAvg})`);
//   else if (dAvg > 2 * kAvg) console.log(`Dolphins win (${dAvg} vs ${kAvg})`);
//   else console.log("No winner");
// }
// checkWinner(dAvg, kAvg);

// function calcTip(billValue) {
//   if (billValue > 50 && billValue < 300) return 0.15 * billValue;
//   else return 0.2 * billValue;
// }
// // let tip = calcTip(100);
// // console.log(tip);
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];
// console.log(tips);
// console.log(bills);
// console.log(total);
