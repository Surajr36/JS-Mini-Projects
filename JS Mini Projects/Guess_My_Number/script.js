'use strict';

// const foo = function () {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.secretNumber');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const flag = 0;
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑No number guessed :/';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    // flag = 1;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📈Too high';
    } else {
      document.querySelector('.message').textContent = 'Game over ‼👽';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📉Too Low';
    } else {
      document.querySelector('.message').textContent = 'Game over ‼👽';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});