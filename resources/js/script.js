$(document).ready(function() {

    /*sticky navigation*/  
      $('.js--section-feature').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
          } else {
              $('nav').removeClass('sticky');
          }
      }, {
      offset: '50px;' 
    });

    /*mobile-nav*/
  $('.js--mobile-nav-icon').click(function () {
    var nav = $('.js--nav-bar');
    var icon = $('.mobile-nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
     });

});