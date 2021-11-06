$(document).ready(function () {

  
});

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find(".burger-menu_button", ".burger-menu_lines");
//   let links = menu.find(".burger-menu_link");
//   let overlay = menu.find(".burger-menu_overlay");

//   button.on("click", (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   overlay.on("click", () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass("burger-menu_active");
//     button.toggleClass("burger-menu_button_active");

//     if (menu.hasClass("burger-menu_active")) {
//       $("body").css("overflow", "hidden");
//     } else {
//       $("body").css("overflow", "visible");
//     }
//   }
// }

// burgerMenu(".burger-menu");

jQuery(document).ready(function () {
  (function ($) {
    var stickyNav = function () {
      $(window).on("scroll resize", function () {
        _WIDTH = $(this).width();
        var offset = $(this).scrollTop();
        if (_WIDTH > 1000) {
          if (offset > 80) {
            $("body").addClass("shrink");
          } else {
            $("body").removeClass("shrink");
          }
        } else {
          $("body").removeClass("shrink");
        }
      });
    };


    // var mobileMenu = function () {
    //   $(".mobMenu  ul > li.menu-item-has-children > ul.sub-menu").each(
    //     function () {
    //       $(this).data("true-height", $(this).outerHeight());
    //       $(this).css("height", 0);
    //     }
    //   );
      
    //   $(".mobMenu  ul > li.menu-item-has-children > a").on(
    //     "click",
    //     function (e) {
    //       e.preventDefault();
    //       $submenu = $(this).parent().find("> ul.sub-menu");
    //       if ($submenu.height() > 0) {
    //         $submenu.css("height", 0);
    //         $(this).removeClass("active");
    //       } else {
    //         $(this).addClass("active");
    //         $submenu.css("height", $submenu.data("true-height"));
    //       }
    //     }
    //   );
    // };

    var counters = function () {
        $(".counter").counterUp({delay: 5, time: 600,});
    };
  
    stickyNav();
    if ($(".counter").length > 0) {
      counters();
    }

    // mobileMenu();

    if ($(".grid").length > 0) {
      $(".grid").masonry({
        columnWidth: ".grid-item",
        itemSelector: ".grid-item",
        isFitWidth: true,
        gutter: 20,
      });
    }

   
    if ($(".swiper1").length > 0) {
      const swiper = new Swiper('.swiper1', {
        loop: true,  
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 20, 
        autoHeight: false,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          520: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          790: {
            slidesPerView: 3,
          },
          1030: {
            slidesPerView: 4,
          }
        },
        pagination: {
          el: ".swiper-pagination_1",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.btnNext_1',
          prevEl: '.btnPrev_1',
        },
        });
    }


    if ($(".swiper2").length > 0) {
      const swiper2 = new Swiper('.swiper2', {
        loop: true,  
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: false,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          520: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          790: {
            slidesPerView: 3,
          },
          1030: {
            slidesPerView: 4,
          }
        },
        pagination: {
          el: ".swiper-pagination_2",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.btnNext_2',
          prevEl: '.btnPrev_2',
        },
        });
    }
      
    var mobileMenu = function () {
      $(".pushmenu > ul > li.menu-item-has-children > ul.sub-menu").each(
        function () {
          $(this).data("true-height", $(this).outerHeight());
          $(this).css("height", 0);
        }
      );
      $(".nav-list").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
        $(".pushmenu-right").toggleClass("pushmenu-open");
        if ($(this).find("i").text() == "תפריט") {
          $(this).find("i").text("סגירה");
        } else {
          $(this).find("i").text("תפריט");
        }
      });
      $(".pushmenu > ul > li.menu-item-has-children > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $submenu = $(this).parent().find("> ul.sub-menu");
          if ($submenu.height() > 0) {
            $submenu.css("height", 0);
            $(this).removeClass("active");
          } else {
            $(this).addClass("active");
            $submenu.css("height", $submenu.data("true-height"));
          }
        }
      );
      
    };

    mobileMenu();

})(jQuery);
});
