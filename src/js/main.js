const page = document.querySelector('html');
const body = page.querySelector('body');

// Мобильное меню

if (window.matchMedia('(max-width: 767px)').matches) {
  const menu = body.querySelector('.main-nav__list');
  const menuLinks = menu.querySelectorAll('.main-nav__link');

  body.querySelector('.main-nav__menu-button').addEventListener('click', () => {
    menu.classList.toggle('main-nav__list--open');
    page.getAttribute('style') ? page.removeAttribute('style') : page.style.overflow = 'hidden';
  });

  for (const link of menuLinks) {
    link.addEventListener('click', () => {
      menu.classList.remove('main-nav__list--open');
      page.removeAttribute('style');
    });
  };

  // Нажатие на программы на мобилке

  const programs = body.querySelectorAll('.programs__item');
  const programsInfo = body.querySelectorAll('.programs__description');

  window.addEventListener('click', (evt) => {
    programs.forEach((program, i) => {
      if (program.contains(evt.target)) {
        programsInfo[i].classList.add('programs__description--active');
      } else {
        programsInfo[i].classList.remove('programs__description--active');
      }
    });
  });
}

export { page, body };
