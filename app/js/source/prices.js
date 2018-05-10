
heightOfPriceElements = function() {
	var firstElement = $('.prices .left .price:nth-child(1) .bottom');
	var secondElement = $('.prices .left .price:nth-child(2) .bottom');
	var thirdElement = $('.prices .right .price:nth-child(1) .bottom');
	var fourthElement = $('.prices .right .price:nth-child(2) .bottom');
	
	if ($(window).width() > 357) {
		firstElement.css('height', 'auto') ;
		secondElement.css('height', 'auto') ;
		thirdElement.css('height', 'auto') ;
		fourthElement.css('height', 'auto') ;
		firstElement.height() > thirdElement.height() ? thirdElement.height(firstElement.height()) : firstElement.height(thirdElement.height());
		secondElement.height() > fourthElement.height() ? fourthElement.height(secondElement.height()) : secondElement.height(fourthElement.height());
	} 
	else {
		firstElement.css('height', 'auto') ;
		secondElement.css('height', 'auto') ;
		thirdElement.css('height', 'auto') ;
		fourthElement.css('height', 'auto') ;
	}
}



if ( $('.prices').length > 0 ) {
		heightOfPriceElements();

		$(window).on('resize', debounce(function(){
			heightOfPriceElements();
		}, 200));
}