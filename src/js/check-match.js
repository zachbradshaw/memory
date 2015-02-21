app.checkMatch = function () {
  var firstTile;
  var secondTile;
  var firstCheckbox;
  var secondCheckbox;

  $('.game-board__cover').on('click', function (e) {
    e.stopPropagation();
    if (firstTile === undefined) {
      firstTile = $(this).data('id');
      firstCheckbox = $('.checkbox', firstTile);
      console.log(firstCheckbox);
      console.log('first tile value is ' + firstTile);
    } else if (firstTile !== undefined) {
        secondTile = $(this).data('id');
        secondCheckbox = $('.checkbox', secondTile);
        console.log(secondCheckbox);
        console.log('second tile value is ' + secondTile);
        if (firstTile === secondTile) {
          alert('match');
          $(firstCheckbox).attr('disabled', true);
          $(secondCheckbox).attr('disabled', true);
          firstTile = undefined;
          secondTile = undefined;
        } else {
          $(firstCheckbox).attr('checked', false);
          $(secondCheckbox).attr('checked', false);
          console.log('no match');
          firstTile = undefined;
          secondTile = undefined;
        }
      }
  });

};
