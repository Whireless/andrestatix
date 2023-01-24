const page = document.querySelector('body');
const menu = page.querySelector('.main-nav__menu-list');
const menuBtn = page.querySelector('.main-nav__menu-button');

menuBtn.onclick = function () {
  menu.classList.toggle('main-nav__menu-list--open')
};
