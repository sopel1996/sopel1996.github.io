function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu_button');
  let links = menu.querySelectorAll('.burger-menu_link');
  let overlay = menu.querySelector('.burger-menu_overlay');
  let menuWrapper = document.querySelector('.burgerMenuWrapper');
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
    menuWrapper.classList.toggle('activeMenu')
    button.classList.toggle('burger-menu_button_active');
    if (menu.classList.contains('burger-menu_active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
}
burgerMenu('.burger-menu');