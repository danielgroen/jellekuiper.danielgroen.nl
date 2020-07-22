// Honeypot
var mobile  = '06 ';    var telephone  = '020 ';     var email = "info";
    mobile += '49 ';        telephone += '772 ';         email += "@jellekuiper.nl";
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

// form
const $contactForm = $('.form'),
      url = window.location.origin;

$contactForm.submit(function(e) {
  var event = e;
  e.preventDefault();

  const name = $("#name").val(),
        subject = $("#subject").val(),
        email = $("#mail").val(),
        message = $("#message").val();

  const sendInfo = {
    Name: name,
    Subject: subject,
    Email: email,
    Message: message
  };

  if ( $('#email').val() ) return false; // honeypot

  $.ajax({
    url: 'https://mailhandler.danielgroen.nl/',
    method: 'POST',
    data: {jellekuiper: JSON.stringify(sendInfo)},
    dataType: 'json',
    beforeSend: function(data) {
      console.log(data)
      if (url !== 'http://localhost:3000') {
        $('.send.button').addClass('success').attr('value', 'Bericht verzonden');
      }
    },
    success: function(data) {
     $('#honeypot').val('sent');
    },
    ajaxComplete: function(data) {
    },
    error: function(err) {
      // console.error(err.responseText);
    }
  });
});