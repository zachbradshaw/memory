app.decrementLives = function () {
  var lives = $('.lives-remaining').text();
  var livesArr = lives.split('');
  var decrement = livesArr.pop();
  var newLives = livesArr.join('');
  $('.lives-remaining').text(newLives);

  if (lives.length === 1) {
    $('.lose-modal').fadeIn();
  }
};
