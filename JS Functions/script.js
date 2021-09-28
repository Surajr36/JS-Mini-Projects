'use strict';

// const flight = 'LH123';
// const suraj = {
//   name: 'Suraj Ragu',
//   passport: 23458884842991,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 23458884842991) alert('Check in');
//   else alert('Wait a minute... Who are youuu');
// };
// checkIn(flight, suraj);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(fn(str));
// };
// transformer('Bruhhhhh What the F', upperFirstWord);
// transformer('Bruhhhhh What the F', oneWord);

// const high5 = function () {
//   console.log('Heyoo');
// };
// document.body.addEventListener('click', high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('Hello')('Suraj');
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTax(0.23);
// console.log(addVat2(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };
// poll.displayResults = function (type = 'string') {
//   if (type === 'string') console.log(`Poll results are ${[...poll.answers]}`);
//   else console.log(poll.answers);
// };

// poll.registerNewAnswer = function () {
//   let option = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n (Write option number )`
//     )
//   );
//   if (typeof option != 'number' || option >= 4) alert('Invalid input');
//   else poll.answers[option]++;
//   this.displayResults();
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups with ${perGroup} number of passengers`);
  }, wait * 1000);
  console.log("We're ready to board");
};
boardPassengers(120, 3);
