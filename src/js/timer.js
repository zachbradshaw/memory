app.gameClock = function () {

  var gameTimer = $("#game-details__timer");

   function update() {
       var myTime = gameTimer.html();
       var timeArr = myTime.split(":");
       var date = new Date();
       date.setHours(timeArr[0]);
       date.setMinutes(timeArr[1]);
       date.setSeconds(timeArr[2]);

       var date2 = new Date(date.valueOf() + 1000);
       var timeStr = date2.toTimeString().split(" ")[0];
       gameTimer.html(timeStr);
       setTimeout(update, 1000);
   }

   setTimeout(update, 1000);

};
