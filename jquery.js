/**
 * jQuery file that provides animations to the personal website.
 */
 $(document).ready(function() {

    /**
     * Smooth scroll functionality when clicking a link anchor.
     */
     $(document).ready(function() {
      $('a[href*="#"]').on('click', (event) => {
        const hash = event.currentTarget.hash;
        if (hash) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $(hash).offset().top - 60}, 750);
        }
      });
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
  