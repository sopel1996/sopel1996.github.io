document.addEventListener('DOMContentLoaded', function(){
  function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector('.burger-menu_button');
    let links = menu.querySelectorAll('.burger-menu_link');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    links.forEach((el) => {
      el.addEventListener('click', () => toggleMenu());
    });
    function toggleMenu() {
      menu.classList.toggle('burger-menu_active');
      button.classList.toggle('burger-menu_button_active');
      
    }
  }
  burgerMenu('.burger-menu');

  const swiperPopular = new Swiper('.sectionPopular_line_slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionPopular_line_sliderBtns_btn_next',
      prevEl: '.sectionPopular_line_sliderBtns_btn_prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      376: {
        slidesPerView: 1,
      },
      780: {
        slidesPerView: 1.2,
      },
      1360: {
        slidesPerView: 2.2
      }

    }
  });
  const swiperNews = new Swiper('.sectionNews_line_slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionNews_line_sliderBtns_btn_next',
      prevEl: '.sectionNews_line_sliderBtns_btn_prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      580: {
        slidesPerView: 1.5,
      },
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
  });
  const swiperPartners = new Swiper('.sectionPartners_itemSlider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
    // autoplay: {
    //   delay: 500,
    //   pauseOnMouseEnter: true,
    //   waitForTransition: false
    // },
    
  });
  const swiperPartners_second = new Swiper('.sectionPartners_itemSlider_second', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
    
  });

  const swipernRecentlyViewed = new Swiper('.sectionRecentlyViewed_line_slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionRecentlyViewed_line_slider_btn_next',
      prevEl: '.sectionRecentlyViewed_line_slider_btn_prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      580: {
        slidesPerView: 1.5,
      },
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
  });
  const swiperAccessories = new Swiper('.sectionAccessories_line_slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionAccessories_line_slider_btn_next',
      prevEl: '.sectionAccessories_line_slider_btn_prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      580: {
        slidesPerView: 1.5,
      },
      780: {
        slidesPerView: 2.2,
      },
      1000: {
        slidesPerView: 3.2
      },
      1360: {
        slidesPerView: 4.2
      }

    }
  });

  var thumbSlider = new Swiper(".thumbSlider", {
    spaceBetween: 10,
    slidesPerView: 4.2,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
      501: {
        direction: 'vertical'
      },
    }
  });
  var mainProductSlider = new Swiper(".mainProductSlider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".mainProductSlider-button-next",
      prevEl: ".mainProductSlider-button-prev",
    },
    thumbs: {
      swiper: thumbSlider,
    },
  });


  const tabs = document.querySelectorAll(".sectionCharacteristic_btns_btn");
  const tabsContent = document.querySelectorAll(".sectionCharacteristic_content");
  
  for (let i = 0; i < tabs.length; i++){
    tabs[i].onclick = () => {
      changeTab(i);
    };
  }
  function changeTab(index) {
    console.log('tabs',tabs)
    console.log('tabsContent',tabsContent)
    for (let i=0; i<tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    for (let i=0; i<tabsContent.length; i++) {
      tabsContent[i].classList.remove('active');
    }

    tabs[index].classList.add('active');
    tabsContent[index].classList.add('active');
  }


})