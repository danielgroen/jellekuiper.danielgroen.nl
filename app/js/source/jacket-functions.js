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

//TODO::dit herschrijven naar alleen css: input:placeholder-shown 
// formvalidator
var invalid = 0;
function validateForm() {
    $('.form-field').each(function () {
        if ($(this).val() == '') {
            invalid++;
        }
    });


   if ( invalid > 0) {
    	invalid = 0;
  		$('input[type="submit"').removeClass('validated');
   }
   else {
		$('input[type="submit"').addClass('validated');
   }
}

$( ".form-field" ).on('keydown',function(e) {
  validateForm();
});

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
