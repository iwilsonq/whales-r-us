$(window).scroll(function() {
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

$(function() {
  $('.page-scroll a').bind('click', function() {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$(function() {
  const deadline = '2017-3-13';
  initializeCountdown('countdown', deadline);


  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeCountdown(id, endtime) {
    let countdown = document.getElementById(id);
    var daysSpan = countdown.querySelector('.days');
    var hoursSpan = countdown.querySelector('.hours');
    var minutesSpan = countdown.querySelector('.minutes');
    var secondsSpan = countdown.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = t.hours;
      minutesSpan.innerHTML = t.minutes;
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    }
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
  }


});
