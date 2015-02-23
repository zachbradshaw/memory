app.checkMatch = function () {
  var firstTile,
      secondTile,
      firstId,
      secondId,
      firstIcon,
      secondIcon,
      matches = 0;

  $('.back').on('click', function () {
    if (firstId === undefined) {
      firstTile = $(this);
      firstId = $(this).data('id');
      firstIcon = $(this).children();
      $(firstIcon).fadeIn();
    } else if (firstId !== undefined) {
        secondTile = $(this);
        secondId = $(this).data('id');
        secondIcon = $(this).children();
        $(secondIcon).fadeIn();
        if (firstId === secondId) {
          matches = ++matches;
          console.log(matches);
          firstId = undefined;
          secondId = undefined;
          if (matches === 9) {
            $('.win-modal').fadeIn();
          }
        } else {
          $(firstIcon).delay(900).fadeOut();
          $(secondIcon).delay(500).fadeOut();
          app.decrementLives();
          firstId = undefined;
          secondId = undefined;
        }
      }
  });

};
