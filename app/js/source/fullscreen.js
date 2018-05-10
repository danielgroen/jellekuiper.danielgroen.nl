// image click
jsonLoader().done(function() {

	$('.image-block img').on('click touch', function() {
		removeAllFullscreen();
		$(this).closest('.figure').addClass('fullscreen');
		$('body').addClass('fullscreen');
		$('.image-mobile-navigations').addClass('visible');

		if ($('.figure.visible.fullscreen').index() === 0 ) {
			$('.image-mobile-navigations .arrow-left').addClass('transparent');
		}
		
		else {
			$('.image-mobile-navigations .arrow-left').removeClass('transparent');
		}

		if ($('.figure.visible').last().hasClass('fullscreen') ) {
			$('.image-mobile-navigations .arrow-right').addClass('transparent');
		}
		else {
			$('.image-mobile-navigations .arrow-right').removeClass('transparent');
		}
	})

	$('.close, .fullscreen').on('click touch', function() {
		removeAllFullscreen();
	});

	$('.overlay').on('click touch', function() {
		removeAllFullscreen();
	});

	$('.arrow-left').on('click touch', function() {
		prevItem();
	});

	$('.arrow-right').on('click touch', function() {
		nextItem();
	});

	$('.fullscreen img').on('swipeleft', function() {
		nextItem();
	});

	$('.fullscreen img').on('swiperight', function() {
		prevItem();
	});
});

$(document).keydown(function(e) {
    // escape
    if (e.keyCode == 27) {
		$('.image-block figure').each(function() {$(this).removeClass('fullscreen')});
		$('body').removeClass('fullscreen');
    }   

    // right arrow
    if (e.keyCode == 37) {
		prevItem();
    }

    // left arrow
    if (e.keyCode == 39) {
		nextItem();
    }
});
