app.checkMatch = function () {
  var firstTile;
  var secondTile;
  var firstIcon;
  var secondIcon;
  var matches = 0;

  $('.back').on('click', function () {
    if (firstTile === undefined) {
      firstTile = $(this).data('id');
      firstIcon = $(this).children();
      $(firstIcon).fadeIn();
      console.log('first tile value is ' + firstTile);
    } else if (firstTile !== undefined) {
        secondTile = $(this).data('id');
        secondIcon = $(this).children();
        $(secondIcon).fadeIn();
        console.log('second tile value is ' + secondTile);
        if (firstTile === secondTile) {
          matches = matches + 1;
          console.log(matches);
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
