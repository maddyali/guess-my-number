'use strict';

// Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score
let score = 20;
// Highscore
let highScore = 0;
// Message func
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Scenario: there is no input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  //   Scenario: player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayMessage(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //  Scenario: when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values of the score and number variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   Restore initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
