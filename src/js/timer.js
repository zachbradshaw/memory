app.gameClock = function () {

  var count = 0;
  var clock = setInterval(timer, 1000);

  function timer () {
    newCount = ++count;
    $('.game-details__timer').text(newCount);
  }

};
