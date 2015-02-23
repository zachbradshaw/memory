app.gameTemplate = function (numPairs, mode) {
  var template = _.template($(mode).html(), {variable: 'm'});
  var html = template({
    cards: app.gameDeck(numPairs)
  });

  $('.main-content').html(html);
  $('.game-icons').hide();
  $('.win-modal').hide();
  $('.lose-modal').hide();
};
