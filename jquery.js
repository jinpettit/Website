/**
 * jQuery file that provides animations to the personal website.
 */
 $(document).ready(function() {

    /**
     * Smooth scroll functionality when clicking a link anchor.
     */
     $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
  
      $('html, body').stop().animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500);
  });

  
    /**
     * Enlarges stars when hovering of hard skills.
     */
    $('.skills-list li').hover(function() {
      $(this).find('img').css('height', '20px');
    }, function() {
      $(this).find('img').css('height', '18px');
    })
  });
  