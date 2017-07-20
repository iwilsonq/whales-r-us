// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $('#subbtn').on('click', function (event) {
        event.preventDefault();
        $('#subbtn').css("display", "none");
        $('#mc_embed_signup').fadeIn('slow');
    });

    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    var $width = $(window).width();
    function responsiveSocial(){
      if($width < 580) {
        $('#socialbuttons').removeClass("list-inline");
        $("#socialbuttons").find($("a")).addClass("pull-left mobile-social")
      }else{
        $('#socialbuttons').addClass("list-inline")
        $("#socialbuttons").find($("a")).removeClass("pull-left mobile-social")
      }
      if ($width < 777){
        $("#products").addClass("text-center");
        $('#products button').removeClass("pull-right");
      }else{
        $("#products").removeClass("text-center");
        $('#products button').addClass("pull-right");
      }


      var currentItems = document.getElementById("car-inner").querySelectorAll(".item");
      for (var i=0; i < currentItems.length; i++){
        $(".item .col-lg-4").unwrap();
      }
      responsiveCarousel();
    }


    function responsiveCarousel(){
      var carouselArray = $('#teamCarousel >.carousel-inner >div');
      var count;
      var w = window.innerWidth;
      if(1000<= w < 1215){
        count = 2;
      }
      if (w >= 1215) {
        count = 3;
      }
      if (w < 1000 ){
        count = 1;
      }
      for (var q = 0; q < carouselArray.length;) {
          var ElementsToBeWrapeed = carouselArray.slice(q, q + count);
          if (q == 0){
            $(ElementsToBeWrapeed).wrapAll("<div class='item active' id='team-item'></div>");
          }else{
            $(ElementsToBeWrapeed).wrapAll("<div class='item' id='team-item'></div>");
          }
          q = q + count;
      }
    }
    responsiveCarousel();
    responsiveSocial();
    $(window).resize(responsiveSocial);



})(jQuery); // End of use strict
