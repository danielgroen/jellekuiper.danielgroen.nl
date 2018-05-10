function imagegrid(data) {
	if (i == 0) {
		var cards = [];
		var fullPath = 'img/resized/';
		var thumbnailPath = 'img/thumbnail/';
		var activePage = $('.main-menu .active').text().toLowerCase();
		var index = 'imagegrid';

		// var oldDescriptionTagPastebackOnLine18AfterTheFigcaptionTag = '<span class="title">' + val.title + '</span><span class="subscription"> - ' + val.description + '</span>\';
		
		$.each(data, function( index, val ) {
			if (index == activePage) {
				$.each( data[index], function( index, val ) {
					cards.push( '<figure class="figure">\
									<div class="figure-wrapper">\
										<svg version="1.1" class="arrow arrow-left" viewBox="0 0 477.175 477.175" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m145.19 238.58l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>\
										<div class="image-holder">\
											<div class="figcaption">\
												<svg version="1.1" class="close" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m505.94 6.058c-8.077-8.077-21.172-8.077-29.249 0l-470.64 470.64c-8.077 8.077-8.077 21.172 0 29.249 4.038 4.04 9.332 6.058 14.625 6.058s10.586-2.019 14.625-6.059l470.64-470.64c8.076-8.076 8.076-21.171 0-29.248z"/><path d="m505.94 476.69l-470.64-470.64c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l470.64 470.64c4.038 4.039 9.332 6.058 14.625 6.058s10.587-2.019 14.624-6.057c8.075-8.078 8.075-21.173-1e-3 -29.25z"/></svg>\
											</div class="figcaption">\
											<picture>\
												<source srcset="' + fullPath + activePage + '/' + val.src + '"" media="(min-width: 768px)">\
												<img class="thumb" data-src="' + thumbnailPath + activePage + '/' + val.src + '" alt="'+ val.title +'">\
											</picture>\
										</div>\
										<svg version="1.1" class="arrow arrow-right" viewBox="0 0 477.175 477.175" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m360.73 229.08l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8 0.1-19z"/></svg>\
									</div>\
								</figure>');
				});
			}
		});

		$( "<div/>", {
			"class": "image-grid",
			html: cards.join( "" )
		}).appendTo( ".image-block .inner" );

		$( "<div/>", {
			"class": "overlay"
		}).appendTo( ".image-block .inner .image-grid" );

		$('.image-block').addClass(activePage);
		$('.main-menu .active').parent().addClass('active-trail');
	}
};