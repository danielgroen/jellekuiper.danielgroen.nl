// menu toggle
$('.menu-toggle').on('click', function(e){
   $(this).toggleClass('active');
   $('body').toggleClass('pinned');
});

$('.main-menu a[href$="#contact"]').on('click', function(e){
	$('.menu-toggle').toggleClass('active');
});
