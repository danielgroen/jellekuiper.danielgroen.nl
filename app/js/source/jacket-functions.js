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
console.log('changed');
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