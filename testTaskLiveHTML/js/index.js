function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let menu_nav = document.querySelector(".sectionHeader .sectionHeader_nav");
  let button = document.querySelector('.burger-menu_button');
  let links = document.querySelectorAll('.sectionHeader_nav-item');
  let overlay = document.querySelector('.burger-menu_overlay');
  let body = document.body;
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.forEach((el) => {
    el.addEventListener('click', () => toggleMenu());
  });
  overlay.addEventListener('click', () => toggleMenu());
  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    menu_nav.classList.toggle('burger-menu_active');
    button.classList.toggle('burger-menu_button_active');
    if (menu.classList.contains('burger-menu_active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
}
burgerMenu('.burger-menu');