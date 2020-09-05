
$(window).scroll(function () {
    // alert('hi');
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("nav").addClass("smallNav");
    }
    else {
        $("nav").removeClass("smallNav");
    }
})

