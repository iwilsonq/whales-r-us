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
    let timeInterval = setInterval(function() {
      let t = getTimeRemaining(endtime);
      countdown.innerHTML = '<div class="remaining">Days: ' + t.days + '</div>' +
                        '<div class="remaining">Hours: '+ t.hours + '</div>' +
                        '<div class="remaining">Minutes: ' + t.minutes + '</div>' +
                        '<div class="remaining">Seconds: ' + t.seconds + '<div>';
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }, 1000);

  }
});
