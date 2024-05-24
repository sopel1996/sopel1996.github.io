const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      // spaceBetween: 300,
    },
    992: {
      slidesPerView: 3,
      // spaceBetween: 00,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,
  Thumbs: false,
  Toolbar: false,
  closeButton: "top",
});
