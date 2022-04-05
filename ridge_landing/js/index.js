document.addEventListener("DOMContentLoaded", function () {
  // Аналог $(document).ready(function(){

    let parts = document.querySelectorAll('.part');


   parts.forEach(el=> {
       el.addEventListener('mouseenter', ()=>{
           document.querySelector(`#popup_${el.dataset.popupid}`).style.display= 'block';
       })
       el.addEventListener('mouseout', ()=>{
           document.querySelector(`#popup_${el.dataset.popupid}`).style.display= '';
       })
   })

   const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }
    












   if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
   {
      document.getElementsByTagName("BODY")[0].className += " safari";
   }
   jQuery(document).ready(function($) {
       $(document).on("click",".js-scroll", function (event) {
           event.preventDefault();
   
           $(".js-menu-btn").removeClass("active");
           $(".js-menu").removeClass("active");
           $("body").removeClass("over");
   
           var id = $(this).attr('href'),
           top = $(id).offset().top;
           $('body,html').animate(
           {scrollTop: top}
   
           , 1000);
       });
   });
   
   
       var swiper = new Swiper('.swiper-container', {
           slidesPerView: "auto",
           spaceBetween: 60,
           loop: true,
           loopAdditionalSlides: 0,
           touchRatio: 0,
           pagination: {
               el: '.swiper-pagination',
               clickable: true,
           },
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
           breakpoints: {
               // when window width is >= 320px
               0: {
                   spaceBetween: 20,
                   slidesPerView: 1,
                   touchRatio: 1,
               },
               // when window width is >= 480px
               768: {
                   spaceBetween: 40,
                   slidesPerView: "auto",
                   touchRatio: 0,
               },
               // when window width is >= 480px
               1024: {
                   spaceBetween: 40,
                   slidesPerView: "auto",
               },
               // when window width is >= 640px
               1200: {
                   spaceBetween: 60,
                   slidesPerView: "auto",
               },
           }
       });
   
   


});
