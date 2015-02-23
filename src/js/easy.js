app.router.add('easy', function () {
  app.gameTemplate(9, '#easy');
  app.checkMatch();
  app.gameClock();
});
