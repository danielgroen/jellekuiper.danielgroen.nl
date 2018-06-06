var i = 0;

function jsonLoader() {
	return $.getJSON( "/assets/data/data.json", function( data ) {
		testimonials(data); 
	});
};
