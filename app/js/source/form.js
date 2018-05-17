// mob            // tel 
mob1 = 'tel:';    tel1 = 'tel:';    var e = "groendaniel";
mob2 = '06';      tel2 = '020';     var mail = "live.nl";
mob3 = '49';      tel3 = '772';
mob4 = '84';      tel4 = '45';
mob5 = '86';      tel5 = '79';
mob6 = '01';

if ($('.mob').length > 0 ) {
	$('.mob').attr('href', mob1 + mob2 + mob3 + mob4 + mob5 + mob6);
	$('.mob').text( mob2 + '-' + mob3 + ' ' + mob4 + ' ' + mob5 + ' ' + mob6);
}

if ($('.tel').length > 0 ) {
  $('.tel').attr('href', tel1 + tel2 + tel3 + tel4 + tel5);
  $('.tel').text( tel2 + '-' + tel3 + ' ' + tel4 + ' ' + tel5);
}

if ($('.mail').length > 0 ) {
  $('.mail').attr('href', 'mailto:' + e + '@' + mail);
  $('.mail').text( e + '@' + mail);
}


var $contactForm = $('.form');
$('.to').val(e + '@' + mail);

$contactForm.submit(function(e) {
  e.preventDefault();

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