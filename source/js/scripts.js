const page = document.querySelector('body');
const menu = page.querySelector('.main-nav__menu-list');
const menuItem = menu.querySelectorAll('.main-nav__link');
const menuBtn = page.querySelector('.main-nav__menu-button');

menuBtn.onclick = function () {
  menu.classList.toggle('main-nav__menu-list--open')
};

menuItem.forEach(a => {
  a.onclick = function () {
    menu.classList.remove('main-nav__menu-list--open')
  };
})
