app.decrementLives = function () {
  var lives = $('.lives-remaining').text();
  console.log(lives);
  var livesArr = lives.split('');
  console.log(livesArr);
  var decrement = livesArr.pop();
  console.log(decrement);
  var newLives = livesArr.join('');
  console.log(newLives);
  $('.lives-remaining').text(newLives);

  if (lives === 0) {
    alert('GAME OVER');
  }
};
