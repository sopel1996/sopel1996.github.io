$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
$(window).scroll(function(){
    $('header').toggleClass('shrink', $(this).scrollTop() > 80);
});