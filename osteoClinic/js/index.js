if (document.querySelectorAll(".swiper1").length !=0){

const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 5,
  loop: false,
});
}
if (document.querySelectorAll(".mySwiper").length !=0){
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
}
if (document.querySelectorAll(".swiper_3").length !=0){
const swiper3 = new Swiper(".swiper_3", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    }
  }
});
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".sectionHeader_nav");
const body = document.body;

burger.addEventListener("click", ()=>{
  menu.classList.toggle("active")
});

document.addEventListener('click', (e)=>{
  if (e.target != menu && e.target != burger){
    menu.classList.remove("active")
  }
})