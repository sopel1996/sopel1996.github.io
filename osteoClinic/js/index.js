const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    loop: false,
});

      var swiper1 = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper1,
        },
      });


      const swiper3 = new Swiper('.swiper_3', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
       
      });