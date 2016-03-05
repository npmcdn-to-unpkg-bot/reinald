
// Smooth scroll to anchor
function scrollToAnchor(aId){
  var target = $(aId);
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
}


// Set up mooth scroll to anchor on (menu) click
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      scrollToAnchor($(this.hash));
      return false;
    }
  });
});

// Closes responsive menu on menu item click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Initialize onload items
$(function () {
  // Smooth scroll to section
  var target = window.location.hash;
  history.replaceState('', document.title, window.location.pathname);
  // Wait for the images to load, then a little bit more
  $('section').imagesLoaded(function() {
    setTimeout(function() {
      scrollToAnchor(target);
    }, 250);
  });

  // Set up masonry (TODO: only in galleries)
  $('.grid').imagesLoaded(function () {
    $('.grid').masonry({initLayout: false, itemSelector: '.grid-item', columnWidth: '.grid-sizer', transitionDuration: '.5s', fitWidth: true, gutter: 0});
    $('.grid').masonry('on', 'layoutComplete', function() {
      console.log('layout complete');
      $('.grid').css({'animation':'fadeIn ease-in 1', 'animation-duration':'.5s'});
      $('.grid').css({'opacity':'1'});
    });
    $('.grid').masonry();
  });

});
