var triggered = false;
//eenmalig fixen
if (triggered === false) {
    $('.body').on('scroll', function() {
        console.log(triggered)
            $('.block .counter').each(function (index) {
                var that = $(this),
                    counter = 0,
                    counterValue = parseInt($(this).html()),
                    bottom_of_object = $(this).offset().top + 20,
                    bottom_of_window = $(window).scrollTop() + $(window).height();
                    triggered = true;

                if( bottom_of_window > bottom_of_object ) {
                    if (counterValue) {
                        $(this).text('0');
                    }

                    var counterLoop = setInterval(function () {
                        if (counter <= counterValue) {
                            that.html(counter);
                            counter ++;
                        }
                        else {
                            clearInterval(counterLoop);
                        }
                    }, (1000 / counterValue * 2 ));
                }
            })
    });
}