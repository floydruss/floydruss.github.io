(function($) {

  // $('#header').addClass('sticky-bar');

  var bindStickyNav =  function () {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > 0) {
        $('#header').addClass('sticky-bar');
      }
      else {
        $('#header').removeClass('sticky-bar');
      }
    });
  }();

  var bindDownloadNav =  function () {
    $(".resume-overlay").hover(function() {
      $("#download-nav").addClass("expanded");
    }, function() {
      $("#download-nav").removeClass("expanded");
    });
  }();





  // #####SCROLL EASING######


  $(function() {
          $('a.ease').bind('click',function(event){
              var $anchor = $(this);

              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1500,'easeInOutExpo');

              event.preventDefault();
          });
      });

   $(document).ready(function(){
      $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false, deeplinking: false});
    });

})(jQuery);
