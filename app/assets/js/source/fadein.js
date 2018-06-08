$(window).on('load scroll', function() {

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
	  	setTimeout(explode, 500 * i);
	  }
	}); 
});