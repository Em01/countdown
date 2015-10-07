function getTimeRemaining(endtime){
  var time = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (time/1000) % 60 );
  var minutes = Math.floor( (time/1000/60) % 60 );
  return {
    'total': time,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
    var time = getTimeRemaining(endtime);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);

    if(time.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

var deadline = 'December 31 2015 00:00:50 UTC+0200';
initializeClock('clockdiv', deadline);