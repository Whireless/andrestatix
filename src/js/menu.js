const nav = document.querySelector('.main-nav');

// Открытие/закрытие мобильного меню

nav.querySelector('.main-nav__menu-button').addEventListener('click', () => nav.classList.toggle('main-nav--open'));

// Закрытие меню при нажатии ссылки

nav.querySelectorAll('.main-nav__link').forEach(link => link.addEventListener('click', () => nav.classList.remove('main-nav--open')));

// allLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     nav.classList.remove('main-nav--open');
//   });
// });
