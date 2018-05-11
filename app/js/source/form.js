//telephone 
tel1 = 'tel:';
tel2 = '020';
tel3 = '772';
tel4 = '45';
tel5 = '79';

if ($('.tel').length > 0 ) {
	$('.tel').attr('href', tel1 + tel2 + tel3 + tel4 + tel5);
	$('.tel').text( tel2 + '-' + tel3 + ' ' + tel4 + ' ' + tel5);

}

// form
var $contactForm = $('.form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/groendaniel@live.nl',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$('.load-wrapper').addClass('visible');
			$('.overtake').addClass('visible');
		},
		success: function(data) {
			$('.load-wrapper').removeClass('visible');
			$('.thankyou').addClass('visible');
			$('.thankyou .send, .overtake').on('click touch', function() {
				location.reload();
			})
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Oops! er ging iets mis...</div>');
		}
	});
});