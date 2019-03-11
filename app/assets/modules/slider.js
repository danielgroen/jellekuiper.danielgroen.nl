
$(window).ready( function() {

	var owl = $('main .owl-carousel'),
      frontOwl = $('.front .owl-carousel'),
      $pagination = $('.pagination');


  owl.owlCarousel({
		items: 1,
    nav: true,
    autoHeight: true,
    dots: false,
		navText: ["<svg version='1.1' id='arrow-left' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175' ><path d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'/></svg>","<svg version='1.1' id='arrow-right' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z'/></svg>"],
		autoplayTimeout:5000,
		autoplayHoverPause:true
  });

  frontOwl.owlCarousel({
		items: 1,
		autoplay:true,
    nav: false,
		autoHeight: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    loop: true,
		autoplayTimeout:10000,
	});

  $pagination.find('.to').text($('.owl-item').length);
  
	owl.on('changed.owl.carousel', function(event) {
    activeItem = owl.find('.active').index();
    
    var currentIndex = event.item.index + 1;
    $pagination.find('.from').text(currentIndex);
	})
});