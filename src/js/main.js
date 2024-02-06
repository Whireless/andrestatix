// Переменные для всех страниц
const page = document.querySelector('html');
const body = page.querySelector('body');
const menu = body.querySelector('.main-nav__menu-list');
const menuItem = menu.querySelectorAll('.main-nav__link');
const menuBtn = body.querySelector('.main-nav__menu-button');

// Preloader
window.addEventListener('load', () => {
  body.querySelector('.preloader').classList.add('preloader--hidden');
});

// Мобильное меню
menuBtn.onclick = function () {
  menu.classList.toggle('main-nav__menu-list--open');
  if (page.getAttribute('style')) {
    page.removeAttribute('style');
  } else {
    page.style.overflow = 'hidden';
  }
};

menuItem.forEach(a => {
  a.onclick = function () {
    menu.classList.remove('main-nav__menu-list--open');
    page.removeAttribute('style');
  };
});

export {page, body};
