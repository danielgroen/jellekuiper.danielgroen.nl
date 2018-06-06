// grid visualizer
document.onkeydown = function(evt) {
    if (evt.ctrlKey && (evt.keyCode == 59 || evt.keyCode == 186)) {
        var newValue = document.body.getAttribute('grid') == 'visible' ? 'invisible' : 'visible';
        document.body.setAttribute('grid', newValue);
        localStorage.setItem('grid', newValue);
    }
}; 

// debouncer
function debounce(callback, time) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(callback, time);
  };
};

// menu toggle
$('.menu-toggle').on('click', function(e){
   $(this).toggleClass('active');
   $('body').toggleClass('pinned');
});


// parralax scrolling
var breakpoint = 720;
offset = 0;
$.fn.parallax = function(strength, offset) {
  if (this.length != 0) {
    if (!$.isNumeric(offset)) { offset = 0; }
    if ( $(window).width() > breakpoint  ) {
      if ( this[0].offsetTop < ( $(window).scrollTop() + $(window).height() )) {
        var transformY =  Math.round( ( $(window).scrollTop() - this[0].offsetTop ) * strength + offset )+ "px" ;
         this.css({
        "-webkit-transform":"translateY(" + transformY + ")",
        "-ms-transform":"translateY(" + transformY + ")",
        "transform":"translateY(" + transformY + ")"
        });
      }
    } else {
        this.css('transformY', '');
    }
  }
};

$(window).on('scroll load', function() {
  $('.hero-image .img').parallax(0.5);
});


// smooth scroll to an div 
$(function($) {
   $('a[href*=\\#]:not([href=\\#])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top - 50
              }, 500);
              return false;
          }
      }
  });
});