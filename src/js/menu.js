const page = document.querySelector('html');
const body = page.querySelector('body');
const menu = body.querySelector('.main-nav__list');
const open = body.querySelector('.main-nav__menu-button');
const allLinks = menu.querySelectorAll('.main-nav__link');

// Открытие/закрытие мобильного меню

open.addEventListener('click', () => menu.classList.toggle('main-nav__list--open'));

// Закрытие меню при нажатии ссылки

allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('main-nav__list--open');
  });
});
