/**
 * jQuery file that provides animations to the personal website.
 */
 $(document).ready(function() {

    /**
     * Smooth scroll functionality when clicking a link anchor.
     */
    $('a').on('click', function(e) {
      var el = $( e.target.getAttribute('href') );
      var elOffset = el.offset().top;
      var elHeight = el.height();
      var windowHeight = $(window).height();
      var offset;
  
      if (elHeight < windowHeight) {
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
        offset = elOffset;
      }
  
      $.smoothScroll({ speed: 1500 }, offset);
      return false;
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
  