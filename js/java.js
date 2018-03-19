/*================================
        services
==================================*/
$(function () {
    //animated on scroll
    new WOW().init();
});

/*================================
        work
==================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*================================
        team
==================================*/
$(function () {
    $("#team-members").owlCarousel({

        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });
});
/*================================
        testimonials
==================================*/

$(function () {
    $("#customers-testimonials").owlCarousel({

        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });
});

/*================================
        stats
==================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });

});

/*======================================
        clients
========================================*/

$(function () {
    $("#clients-list").owlCarousel({

        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,

    });
});
/*================================
        nav menu
==================================*/
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav")
            $("#back-to-top").fadeOut();

        } else {
            $("nav").addClass("vesco-top-nav")
            $("#back-to-top").fadeIn();
        }
    });
});
/*smooth scrolling*/
$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get\return id like #about,and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    })

});
