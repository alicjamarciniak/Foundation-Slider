$(document).ready(function() {
  /* navbar START */

  function navbarHandler() {

      if ($(window).innerWidth() < 640) {
          $('.title-bar').show();
          $('.navbar').addClass('navbar-fixed');
          $(document.body).addClass('sticky-menu');
      } else if($(window).scrollTop() > num && ($(window).innerWidth() > 640)) {
          $('.title-bar').hide();
          $('.navbar').removeClass('navbar-fixed');
          $(document.body).addClass('sticky-menu');
      } else {
        $('.title-bar').hide();
        $(document.body).removeClass('sticky-menu');
      }
  };
  navbarHandler();
  var num = 10; //number of pixels before modifying styles
  $(window).bind('scroll', navbarHandler);
  /* navbar END */

  /* articles START */
    $('.article-hexagon').on('click', function() {
      $(this).siblings('.article-content').slideToggle('slow');
    });
  /* articles END */

  $.fn.snow({ minSize: 5, maxSize: 50, newOn: 1000, flakeColor: '#0099FF' });

});
/* FOUNDATION */
  $(document).foundation();
/* FOUNDATION */
