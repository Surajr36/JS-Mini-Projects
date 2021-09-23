'use strict';

// ****Another way of toggling visual effects****
// active.classList.add('player--active');
// active = document.querySelector(`.player--${activePlayer}`);
// active.classList.remove('player--active');

//Selecting elements always a good practice in JS
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0]; //final scores of players
let currentScore = 0;
let activePlayer = 0;
// let active = document.querySelector(`.player--${activePlayer}`);

//Start conditions
score0El.textContent = score1El.textContent = 0;
diceEl.classList.add('hidden');

//Roll functionality
btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    // active = document.querySelector(`.player--${activePlayer}`);
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  console.log(currentScore);
  if (activePlayer === 0) score0El.textContent += currentScore;
  else score1El.textContent += currentScore;
});
