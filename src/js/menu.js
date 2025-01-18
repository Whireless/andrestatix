const page = document.querySelector('html');
const menu = page.querySelector('.main-nav');
const open = menu.querySelector('.main-nav__menu-button');
const allLinks = menu.querySelectorAll('.main-nav__link');

// Открытие/закрытие мобильного меню

open.addEventListener('click', () => menu.classList.toggle('main-nav--open'));

// Закрытие меню при нажатии ссылки

allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('main-nav--open');
  });
});
