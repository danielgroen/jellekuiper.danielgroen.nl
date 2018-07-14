// menu toggle
$('.menu-toggle').on('click', function(e){
   $(this).toggleClass('active');
   $('body').toggleClass('pinned');
});

$('.main-menu a[href$="#contact"]').on('click', function(e){
	$('.menu-toggle').toggleClass('active');
});

// Close all menus when pressing ESC
$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.menu-toggle').hasClass('active')) {
   $(this).removeClass('active');
   $('body').removeClass('pinned');
  };
});
