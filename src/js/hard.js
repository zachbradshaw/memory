app.router.add('hard', function () {
  app.gameTemplate(16, '#hard');
  app.checkMatch();
  app.gameClock();
});
