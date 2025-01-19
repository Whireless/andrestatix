const page = document.querySelector('html');
const nav = page.querySelector('.main-nav');
// const open = nav.querySelector('.main-nav__menu-button');
// const allLinks = nav.querySelectorAll('.main-nav__link');

// Открытие/закрытие мобильного меню

// open.addEventListener('click', () => nav.classList.toggle('main-nav--open'));
nav.querySelector('.main-nav__menu-button').addEventListener('click', () => nav.classList.toggle('main-nav--open'));

// Закрытие меню при нажатии ссылки

// allLinks.forEach((link) => link.addEventListener('click', () => nav.classList.remove('main-nav--open')));
nav.querySelectorAll('.main-nav__link').forEach(link => link.addEventListener('click', () => nav.classList.remove('main-nav--open')));

// allLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     nav.classList.remove('main-nav--open');
//   });
// });
