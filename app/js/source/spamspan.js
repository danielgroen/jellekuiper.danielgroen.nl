//telephone 
tel1 = 'tel:';
tel2 = '06';
tel3 = '244';
tel4 = '249';
tel5 = '79';

if ($('.tel').length > 0 ) {
	$('.tel').attr('href', tel1 + tel2 + tel3 + tel4 + tel5);
	$('.tel').text( tel2 + '-' + tel3 + ' ' + tel4 + ' ' + tel5);

}

// form
var $contactForm = $('.contactform');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/studioginger11@gmail.com',
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
				console.log('jo');
			})
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});