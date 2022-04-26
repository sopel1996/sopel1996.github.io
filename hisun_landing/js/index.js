document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination_1",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
    },
    navigation: {
      nextEl: ".swiper-button-next_1",
      prevEl: ".swiper-button-prev_1",
    },
  });
  var swiper2 = new Swiper(".mySwiper_2", {
    pagination: {
      el: ".swiper-pagination_2",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
    },
    navigation: {
      nextEl: ".swiper-button-next_2",
      prevEl: ".swiper-button-prev_2",
    },
  });

  var swiper3 = new Swiper(".mySwiper_3", {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  function addZero(num) {
    return num > 9 ? num : "0" + num;
  }

  // Select
  const Select = document.querySelector("#selectID");
  const Select_title = Select.querySelector(".__select__title");
  const Select_label = Select.querySelectorAll(".__select__label");

  const modelName = document.getElementById("modelName");
  const engine = document.getElementById("engine");
  const cooling = document.getElementById("cooling");
  const frontTires = document.getElementById("frontTires");
  const rearTires = document.getElementById("rearTires");

  var test;

   fetch('/hisun_landing/js/data.json')
  //  fetch("js/data.json")
   .then((res)=>{
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      test = data;
      return data;
    });

  // Toggle menu
  Select_title.addEventListener("click", () => {
    if ("active" === Select.getAttribute("data-state")) {
      Select.setAttribute("data-state", "");
    } else {
      Select.setAttribute("data-state", "active");
    }
  });

  // Close when click to option
  for (let i = 0; i < Select_label.length; i++) {
    Select_label[i].addEventListener("click", (evt) => {
      Select_title.textContent = evt.target.textContent;
      Select.setAttribute("data-state", "");
      modelName.textContent = evt.target.textContent;
      engine.textContent = test[evt.target.getAttribute("data-jsonID")].engine;
      cooling.textContent =
        test[evt.target.getAttribute("data-jsonID")].cooling;
      frontTires.textContent =
        test[evt.target.getAttribute("data-jsonID")].frontTires;
      rearTires.textContent =
        test[evt.target.getAttribute("data-jsonID")].rearTires;
    });
  }

  let goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);

  let logo = document.querySelector('.sectionHeader_logo-img');
  let phone = document.querySelector('.sectionHeader_logo-phone');


  function trackScroll() {
    let scrolled = window.pageYOffset;
    let clientWidth = document.documentElement.clientWidth;
    let coords = 500;
    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
    if ((scrolled > 0)&& (clientWidth<768)) {
      logo.classList.add("none");
      phone.classList.remove("none");
    }
    if (scrolled === 0) {
      logo.classList.remove("none");
      phone.classList.add("none");
    }
  }
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
  trackScroll();
  const openModal = function (modalSelector) {
    modalOverlay = document.querySelector(".modalOverlay");
    modal = document.querySelector(modalSelector);
    modalOverlay.style.display = "block";
    modal.style.display = "block";
  };
  const closeModal = function (modalSelector) {
    modalOverlay = document.querySelector(".modalOverlay");
    modal = document.querySelector(modalSelector);
    modalOverlay.style.display = "none";
    modal.style.display = "none";
  };
  var modalOverlay = document.querySelector(".modalOverlay");
  var closeBtn = document.querySelector(".closeModal");
  let btns = [];
  btns.push(document.querySelector(".sectionHeader_btns-requestCall"));
  btns.push(document.querySelector(".sectionBanner_getOffer"));
  btns.push(document.querySelector(".sectionModels_getOffer"));
  btns.push(document.querySelector(".sectionWantSee_content-requestCall"));
  btns.push(document.querySelector(".sectionGetOffer_text-getPhone"));

  modalOverlay.addEventListener("click", () => {
    closeModal(".modal-content");
  });
  closeBtn.addEventListener("click", () => {
    closeModal(".modal-content");
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(".modal-content");
    });
  });


  let numbers = [];
  numbers.push(document.querySelector('.two'));
  numbers.push(document.querySelector('.three'));
  numbers.push(document.querySelector('.five'));
  numbers.push(document.querySelector('.six'));
  numbers.push(document.querySelector('.seven'));
  
  let two = document.querySelector('.trig2');
  let three = document.querySelector('.trig3');
  let five = document.querySelector('.trig5');
  let six = document.querySelector('.trig6');
  let seven = document.querySelector('.trig7');
  
  numbers.forEach(el=>{
    el.addEventListener('mouseover', ()=>{
      if (el.classList.contains('two')){
        two.classList.add('hover');
      } 
      if (el.classList.contains('three')){
        three.classList.add('hover');
      } 
      if (el.classList.contains('five')){
        five.classList.add('hover');
      } 
      if (el.classList.contains('six')){
        six.classList.add('hover');
      } 
      if (el.classList.contains('seven')){
        seven.classList.add('hover');
      } 
    });
    el.addEventListener('mouseout', ()=>{
      if (el.classList.contains('two')){
        two.classList.remove('hover');
      } 
      if (el.classList.contains('three')){
        three.classList.remove('hover');
      } 
      if (el.classList.contains('five')){
        five.classList.remove('hover');
      } 
      if (el.classList.contains('six')){
        six.classList.remove('hover');
      } 
      if (el.classList.contains('seven')){
        seven.classList.remove('hover');
      } 
    })
  })


  let baseModels = document.querySelectorAll('.baseModel');
  let secondModels = document.querySelectorAll('.secondModel');

  console.log();

  back = document.querySelector('.back');
  forward = document.querySelector('.forward');

  back.addEventListener('click', ()=>{
    baseModels.forEach(el=>{
      el.classList.remove('noActive')
    })
    secondModels.forEach(el=>{
      el.classList.add('noActive')
    })
  });
  forward.addEventListener('click', ()=>{
    secondModels.forEach(el=>{
      el.classList.remove('noActive')
    })
    baseModels.forEach(el=>{
      el.classList.add('noActive')
    })
  })

})
