document.addEventListener('DOMContentLoaded', function(){

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
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
      formatFractionTotal: addZero,
    },
    navigation: {
      nextEl: ".swiper-button-next_2",
      prevEl: ".swiper-button-prev_2",
    },
  });

  function addZero(num) {
    return num > 9 ? num : "0" + num;
  }

  // Select
  const Select = document.querySelector("#selectID");
  const Select_title = Select.querySelector(".__select__title");
  const Select_label = Select.querySelectorAll(".__select__label");

  const engine =  document.getElementById('engine');
  const cooling =  document.getElementById('cooling');
  const frontTires = document.getElementById('frontTires'); 
  const rearTires =  document.getElementById('rearTires');

  var test 

 fetch('/js/data.json').then((res)=>{
    if (res.ok){
      return res.json()
    }
  }).then((data)=>{
    test = data;
    return data
  })

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
      engine.textContent = test[evt.target.getAttribute('data-jsonID')].engine;
      cooling.textContent = test[evt.target.getAttribute('data-jsonID')].cooling;
      frontTires.textContent = test[evt.target.getAttribute('data-jsonID')].frontTires;
      rearTires.textContent = test[evt.target.getAttribute('data-jsonID')].rearTires;
    });
  }
})