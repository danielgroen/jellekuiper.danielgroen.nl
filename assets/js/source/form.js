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
  var event = e;
  e.preventDefault();
  $('.to').val(email);

  if ( $('#honeypot').val() ) {
    return false;
  }
  
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyR85wci2UtjMI2C1C8tBKKEMUxB_jESOwBQtdyz8ANv-Se-us/exec',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function(data) {
      $('.send.button').addClass('success').attr('value', 'Bericht verzonden');
    },
    success: function(data) {
     $('#honeypot').val('sent');
    },
    ajaxComplete: function(data) {
      alert('joo');
    },
    error: function(err) {
      console.log(err);
    }
  });
});