jQuery(function ($) {
// this is the opening file

removeAllFullscreen = function() {
	$('.fullscreen').removeClass('fullscreen');
	$('.transparent').removeClass('transparent');
	$('.image-mobile-navigations').removeClass('visible');
	$('.figure img').each(function() {
		$(this).removeClass('slide-right');
		$(this).removeClass('slide-left');
	});
}

prevItem = function() {
	$('.figure img').each(function() {
		$(this).removeClass('slide-right');
		$(this).addClass('slide-left');
	})
	if ( $('.fullscreen').prev().is('.figure') ) {
    	$('.fullscreen').prev().addClass('fullscreen').next().removeClass('fullscreen');
	}

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
}

nextItem = function() {
	$('.figure img').each(function() {
		$(this).removeClass('slide-left');
		$(this).addClass('slide-right');
	})
	if ( $('.fullscreen').next().is('.figure') ) {
    	$('.fullscreen').next().addClass('fullscreen').prev().removeClass('fullscreen');
	}

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
};
