'use strict';

// const foo = function () {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.message').textContent = 'π Correct number!';
// document.querySelector('.secretNumber');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const flag = 0;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'πNo number guessed :/';
    displayMessage('πNo number guessed :/');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'π Correct number!';
    displayMessage('π Correct number!');
    // flag = 1;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'πToo high' : 'πToo Low');
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('Game over βΌπ½');
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.score').textContent = --score;
  //     document.querySelector('.message').textContent = 'πToo high';
  //   } else {
  //     document.querySelector('.message').textContent = 'Game over βΌπ½';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.score').textContent = --score;
  //     document.querySelector('.message').textContent = 'πToo Low';
  //   } else {
  //     document.querySelector('.message').textContent = 'Game over βΌπ½';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
