$(document).ready(function() {
  /* navbar START */
  function displayNavbarSticky() {

      if (($(window).scrollTop()) > num || ($(window).innerWidth() < 640)) {
          // $('.example-menu').hide();
          $('.title-bar').show();
          $('.title-bar').addClass('fixed');
          $('.header').addClass('header-fixed');
          $('.header__logo').addClass('header__logo-fixed');
          $('.my-slider').addClass('slider-sticky');

      } else if($(window).scrollTop() < num) {
          $('.title-bar').hide();
          // $('.example-menu').show();
          $('.title-bar').removeClass('fixed');
          $('.header').removeClass('header-fixed');
          $('.header__logo').removeClass('header__logo-fixed');
          $('.my-slider').removeClass('slider-sticky');
      }
  };
  displayNavbarSticky();
  var num = 10; //number of pixels before modifying styles
  $(window).bind('scroll', displayNavbarSticky);
  /* navbar END */

  /* articles START */
    $('.article-hexagon').on('click', function() {
      $(this).siblings('.article-content').slideToggle('slow');
    });
  /* articles END */
});
/* FOUNDATION */
  $(document).foundation();
/* FOUNDATION */
