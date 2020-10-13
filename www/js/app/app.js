/************************/
/*       INDEX          */
/*=======================
 *  01.  Menu           *
 *  02.  Scrollspy      *
 *  03.  Magnific Popup *
 *  04.  Owl Carousel   *
 *  05.  Loader         *
 *  06.  Back to top    *
 =======================*/

! function($) {
    "use strict";
    // Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.navbar-nav a, .mouse-down').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Scrollspy
    $(".navbar-nav").scrollspy({ offset: 70 });
    
    // Magnific Popup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    //Owl Carousel
    $("#clients-testi").owlCarousel({
        autoPlay: 3000,
        items: 2,
        itemsDesktop : [1024,2],
        itemsDesktopSmall : [900,2],
        itemsTablet: [600,1],
    });

    // BACK TO TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 2500);
        return false;
    });
    
    //Feather icon
    feather.replace()
}(jQuery)
