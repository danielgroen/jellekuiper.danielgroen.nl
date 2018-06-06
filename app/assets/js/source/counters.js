$('.block .counter').each(function (index) {
    var that = $(this);
    var counter = 0;
    var counterValue = parseInt($(this).html());

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
})