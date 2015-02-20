app.gameBoard = function () {
  var pieceValues = 'aabbccddeeffgghhii';
  var gamePieces = pieceValues.split('');
  var randomPiece = gamePieces[randomValue()];
  console.log(gamePieces);

  function randomValue () {
    return [Math.floor(Math.random() * gamePieces.length)];
  };
  console.log(randomPiece);
}
