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
