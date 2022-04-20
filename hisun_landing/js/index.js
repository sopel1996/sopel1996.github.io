var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var swiper = new Swiper(".mySwiper_2", {
    pagination: {
      el: ".swiper-pagination_2",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    navigation: {
      nextEl: ".swiper-button-next_2",
      prevEl: ".swiper-button-prev_2",
    },
  });

  function addZero(num){
    return (num > 9) ? num : '0' + num;
  }