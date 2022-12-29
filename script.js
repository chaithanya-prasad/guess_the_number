'use strict';
let actualNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
document.querySelector('.guess').value = null;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';
  } else {
    //when player lost
    if (score < 1) {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
    //when player guess high
    else if (guess > actualNumber) {
      document.querySelector('.message').textContent = 'TOO HIGH';
      //document.querySelector('.guess').value = null;
      score--;
      document.querySelector('.score').textContent = score;
    }
    //when player guessis low
    else if (guess < actualNumber) {
      document.querySelector('.message').textContent = 'TOO LOW';
      //document.querySelector('.guess').value = null;
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
    //when player wins
    else {
      document.querySelector('.message').textContent = 'correct answer';
      document.querySelector('.number').textContent = actualNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
//when player wins
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  actualNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});
