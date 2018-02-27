
 //initialize parallax
 $(document).ready(function () {
    $('.parallax').parallax();
 //initialize select menu
    $('select').material_select();
 //initialize tabs
    $('ul.tabs').tabs();
    $('.carousel.carousel-slider').carousel({indicators: true});
    $('.modal').modal();
    $(".pros").hover(function() {
        var overlay = $(this).find(".overlay");
        overlay.css("display", "block");
    }, function() {
        var overlay = $(this).find(".overlay");
        overlay.css("display", "none");
    });

$('.nxt').on('click', function() {
    $(this).carousel('next', 1);
});
    
});