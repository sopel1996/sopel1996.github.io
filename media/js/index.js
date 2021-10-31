$(document).ready(function () {

  
});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu_button", ".burger-menu_lines");
  let links = menu.find(".burger-menu_link");
  let overlay = menu.find(".burger-menu_overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    button.toggleClass("burger-menu_button_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}

burgerMenu(".burger-menu");

jQuery(document).ready(function () {
  (function ($) {
    var stickyNav = function () {
      $(window).on("scroll resize", function () {
        _WIDTH = $(this).width();
        var offset = $(this).scrollTop();
        if (_WIDTH > 1000) {
          if (offset > 100) {
            $("body").addClass("shrink");
          } else {
            $("body").removeClass("shrink");
          }
        } else {
          $("body").removeClass("shrink");
        }
      });
    };


    var mobileMenu = function () {
      $(".mobMenu  ul > li.menu-item-has-children > ul.sub-menu").each(
        function () {
          $(this).data("true-height", $(this).outerHeight());
          $(this).css("height", 0);
        }
      );
      
      $(".mobMenu  ul > li.menu-item-has-children > a").on(
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

    var counters = function () {
        $(".counter").counterUp({delay: 5, time: 600,});
    };
  
    stickyNav();
    if ($(".counter").length > 0) {
      counters();
    }

    mobileMenu();

    if ($(".grid").length > 0) {
      $(".grid").masonry({
        columnWidth: ".grid-item",
        itemSelector: ".grid-item",
        isFitWidth: true,
        gutter: 20,
      });
    }


})(jQuery);
});
