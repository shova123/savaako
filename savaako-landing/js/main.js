$(document).ready(function() {

    // Skrollr
    if ($(window).width() > 767) {
        skrollr.init();
    }
    $(window).on('resize', function() {
        if ($(window).width() <= 767) {
            skrollr.init().destroy();
        }
    });
});
