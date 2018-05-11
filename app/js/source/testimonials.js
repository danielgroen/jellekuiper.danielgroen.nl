function testimonials(data) {
	if (i == 0 ) {
		var cards = [];
		var index = i++;

		$.each(data.testimonials, function( index, val ) {
			cards.push( '<article><blockquote class="quote">' + val.text + '</blockquote><p class="name">' + val.name + '</p></article>');
		});

		$( "<div/>", {
			"class": "owl-carousel owl-theme",
			html: cards.join( "" )
		}).appendTo( ".testimonials" );
	}
};

jsonLoader().done(function() {
	var owl = $('.owl-carousel');

	owl.owlCarousel({
		items: 1,
		autoplay:true,
	    loop: true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
	});
})
