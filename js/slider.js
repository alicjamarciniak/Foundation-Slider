$(document).ready(function() {

  /* articles START */
    $('.article-hexagon').on('click', function() {
      $(this).siblings('.article-content').slideToggle('slow');
    });
  /* articles END */
});
