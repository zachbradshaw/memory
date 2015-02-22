app.checkMatch = function () {
  var firstTile;
  var secondTile;
  var firstIcon;
  var secondIcon;

  $('.back').on('click', function () {
    if (firstTile === undefined) {
      firstTile = $(this).data('id');
      firstIcon = $(this).children();
      $(firstIcon).show();
      console.log('first tile value is ' + firstTile);
    } else if (firstTile !== undefined) {
        secondTile = $(this).data('id');
        secondIcon = $(this).children();
        $(secondIcon).show();
        console.log('second tile value is ' + secondTile);
        if (firstTile === secondTile) {
          firstTile = undefined;
          secondTile = undefined;
        } else {
          $(firstIcon).delay(500).fadeOut();
          $(secondIcon).delay(500).fadeOut();
          app.decrementLives();
          firstTile = undefined;
          secondTile = undefined;
        }
      }
  });

};
