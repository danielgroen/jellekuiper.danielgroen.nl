// menu toggle
$('.menu-toggle').on('click', function(e){
   $(this).toggleClass('active');
   $('body').toggleClass('pinned');
});