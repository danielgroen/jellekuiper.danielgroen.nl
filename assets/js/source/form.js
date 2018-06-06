var mobile  = '06 ';    var telephone  = '020 ';     var email = "groendaniel";    
    mobile += '49 ';        telephone += '772 ';         email += "@live.nl";
    mobile += '84 ';        telephone += '45 ';
    mobile += '86 ';        telephone += '79';
    mobile += '01';

if ($('.mob').length > 0 ) {
	$('.mob').attr('href', 'tel:' + mobile.replace(/ +/g, "")).text( mobile);
}

if ($('.tel').length > 0 ) {
  $('.tel').attr('href', 'tel:' + telephone.replace(/ +/g, "")).text( telephone);
}

if ($('.mail').length > 0 ) {
  $('.mail').attr('href', 'mailto:' + email ).text(email);
}


var $contactForm = $('.form');

$contactForm.submit(function(e) {
  e.preventDefault();
  $('.to').val(email);

  if ( $('#honeypot').val() ) {
    return false;
  }
  
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxqE_YvIkezI6uUbiLA1TPIdrKbNqHylojTWqt8Du6hfwqvBWFP/exec',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function(data) {
      $('.load-wrapper').addClass('visible');
      $('.overtake').addClass('visible');
    },
    success: function(data) {
      $('.load-wrapper').removeClass('visible');
      $('.thankyou').addClass('visible');
      $('.thankyou .send, .overtake').on('click touch', function() {
        location.reload();
      })
    },
    error: function(err) {
      console.log(err);
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Oops! er ging iets mis...</div>');
    }
  });
});