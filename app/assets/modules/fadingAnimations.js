$(window).on('load', function() {
	//load in first item of page
	$('main .block:first-child .usp:first-child .picture').addClass("fade-in");
	$('main .block:first-child .reference:first-child').addClass("fade-in");

	new Rellax('.hero-image img', {
    speed: -7,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
	});
});

$(window).on('scroll', function() {

	$('main .block > .usp').each( function(i){
	  var bottom_of_object = $(this).offset().top + 20,
	  	  bottom_of_window = $(window).scrollTop() + $(window).height();

	  if( bottom_of_window > bottom_of_object ){
	    $(this).find('.picture').addClass("fade-in");
	    $(this).find('.reference').addClass("fade-in");
	  }
	}); 

	$('main .references .reference').each( function(i){
  	  var that = $(this);
	  var bottom_of_object = that.offset().top + 20,
	  	  bottom_of_window = $(window).scrollTop() + $(window).height();

	  if ( bottom_of_window > bottom_of_object ) {
		var explode = function(){
    		that.addClass("fade-in");
		};
	  	setTimeout(explode, 100 * i);
	  }
	}); 
});