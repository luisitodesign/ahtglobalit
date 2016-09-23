$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".maintext");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("nav").css('background-color', 'rgba(10,10,10,.90)');
            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
});