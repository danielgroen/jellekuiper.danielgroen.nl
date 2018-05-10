function testimonials(data) {
	if (i == 0 || i == 'imagegrid') {
		var cards = [];
		var imagePath = 'img/resized/testimonials/';
		var index = i++;

		$.each(data.testimonials, function( index, val ) {
			cards.push( '<article><div class="top"><img class="image '+  val.name + '" src="' + imagePath + val.image + '" alt=" ' +  val.name + '"></div><div class="bottom"><blockquote class="quote">' + val.text + '</blockquote><p class="name">' + val.name + '</p></div></article>');
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
