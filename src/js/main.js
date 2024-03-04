const page = document.querySelector('html');
const body = page.querySelector('body');

// Мобильное меню

if (window.matchMedia('(max-width: 767px)').matches) {
  const menu = body.querySelector('.main-nav__menu-list');
  const menuLinks = menu.querySelectorAll('.main-nav__link');

  body.querySelector('.main-nav__menu-button').addEventListener('click', () => {
    menu.classList.toggle('main-nav__menu-list--open');
    page.getAttribute('style') ? page.removeAttribute('style') : page.style.overflow = 'hidden';
  });

  for (const link of menuLinks) {
    link.addEventListener('click', () => {
      menu.classList.remove('main-nav__menu-list--open');
      page.removeAttribute('style');
    });
  };
}

export { page, body };
