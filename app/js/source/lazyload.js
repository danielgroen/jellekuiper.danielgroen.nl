// lazyload
jsonLoader().done(function() {
	$('img[data-src]').each(function(index) {
        var that = $(this);
		var src = that.attr('data-src');
		that.removeAttr('data-src');
		that.attr('src', src);
	})
}).done(function(){
	$('.figure').each(function(index) {
		var that = $(this);
        setTimeout(function() { 
			that.addClass('visible');
        }, 50 * index);
	})
});