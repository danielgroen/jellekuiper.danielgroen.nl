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