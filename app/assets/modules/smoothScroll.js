$('a[href^="#"]').click(function () {
  $('body,html').animate({scrollTop: $( $.attr(this, 'href') ).offset().top - 40}, 500);
});