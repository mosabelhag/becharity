/*
Main js
@mosabelhag
*/

$(document).ready(function() {

  setTimeout(function() {
    $('body').addClass('loaded');
  }, 3000);


  $("#owl-demo").owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 2000,
    paginationSpeed: 400,
    items: 1,
    autoplay: true,
    loop: true,
    responsiveRefreshRate: 200,
    stopOnHover:true,

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });

  $(window).scroll(function() {
      var menu = $('.main-menu');
      if ($(window).scrollTop() >= menu.height()) {
        menu.addClass('navbar-fixed-top fixed-scroll');
      } else {
        menu.removeClass('navbar-fixed-top fixed-scroll');
      }
    });
});
