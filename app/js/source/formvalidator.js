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