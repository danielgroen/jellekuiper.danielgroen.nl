var i = 0;

function jsonLoader() {
	return $.getJSON( "data/data.json", function( data ) {
		imagegrid(data);
		testimonials(data);
	});
};