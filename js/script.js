$(document).ready(function() {
  /* navbar START */

  function displayToggleMenu() {
    $('.title-bar').show();
  }
  function removeToggleMenu() {
    $('.title-bar').hide();
  }

  function displayToggleNavbar() {
    $('.navbar').addClass('navbar-fixed');
  }
  function removeToggleNavbar() {
    $('.navbar').removeClass('navbar-fixed');
  }

  function displayStickyMenu() {
    $('.header').addClass('header-fixed');
    $('.header__logo').addClass('header__logo-fixed');
    $('.my-slider').addClass('slider-sticky');
    $('.menu-bar').addClass('fixed');
  }
  function removeStickyMenu() {
    $('.header').removeClass('header-fixed');
    $('.header__logo').removeClass('header__logo-fixed');
    $('.my-slider').removeClass('slider-sticky');
    $('.menu-bar').removeClass('fixed');
  }

  function navbarHandler() {

      if ($(window).innerWidth() < 640) {
          displayToggleMenu();
          displayToggleNavbar();
          displayStickyMenu();
      } else if($(window).scrollTop() > num && ($(window).innerWidth() > 640)) {
          removeToggleMenu();
          removeToggleNavbar();
          displayStickyMenu();
      } else {
        removeToggleMenu();
        removeToggleNavbar();
        removeStickyMenu();
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
