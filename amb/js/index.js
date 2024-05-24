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

  // const swiper = new Swiper('.sectionPopular_line_slider', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.sectionPopular_line_sliderBtns_btn_prev',
  //     prevEl: '.sectionPopular_line_sliderBtns_btn_next',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  const swiperPopular = new Swiper('.sectionPopular_line_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.sectionPopular_line_sliderBtns_btn_next',
      prevEl: '.sectionPopular_line_sliderBtns_btn_prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      376: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 1.2,
      },
      1360: {
        slidesPerView: 2.2
      }

    }
  });
  const swiperNews = new Swiper('.sectionNews_line_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.sectionNews_line_sliderBtns_btn_next',
      prevEl: '.sectionNews_line_sliderBtns_btn_prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      580: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
  });
  const swiperPartners = new Swiper('.sectionPartners_itemSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 320px
      580: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
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
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 320px
      580: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
    
  });

  const swipernRecentlyViewed = new Swiper('.sectionRecentlyViewed_line_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.sectionRecentlyViewed_line_slider_btn_next',
      prevEl: '.sectionRecentlyViewed_line_slider_btn_prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      580: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
  });
  const swiperAccessories = new Swiper('.sectionAccessories_line_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.sectionAccessories_line_slider_btn_next',
      prevEl: '.sectionAccessories_line_slider_btn_prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      580: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 2.2,
      },
      1360: {
        slidesPerView: 3.2
      }

    }
  });

})