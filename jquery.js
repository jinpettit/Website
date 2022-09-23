/**
 * jQuery file that provides animations to the personal website.
 */
 $(document).ready(function() {

    /**
     * Smooth scroll functionality when clicking a link anchor.
     */
     $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if ($(".nav-primary").hasClass("nav-primary-fixed")) {
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 40
            }, 750);
            return false;
          }
        } else {
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 750);
            return false;
          }
        }
      }
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
  