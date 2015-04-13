app.checkMatch = function () {
  var firstTile,
      firstIcon,
      secondIcon,
      matches = 0;

  $('.back').on('click', function () {
    var currentTile = $(this);
    if (firstTile === undefined) {
      firstTile = currentTile
      firstIcon = currentTile.children();
      $(firstIcon).fadeIn();
    } else if (firstTile[0] === currentTile[0]) {
      $('.alert-modal').fadeIn().delay(1000).fadeOut();
    } else {
        secondIcon = $(this).children();
        $(secondIcon).fadeIn();
        if (firstTile.text() === currentTile.text()) {
          matches = ++matches;
          firstTile = undefined;
          secondTile = undefined;
          if (matches === 9) {
            $('.win-modal').fadeIn();
          }
        } else {
          $(firstIcon).delay(900).fadeOut();
          $(secondIcon).delay(500).fadeOut();
          app.decrementLives();
          firstTile = undefined;
          secondTile = undefined;
        }
      }
  });

};
