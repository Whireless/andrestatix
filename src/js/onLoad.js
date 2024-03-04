import { page, body } from './main.js';
import { ruIndex, ruOther, ruIndexImg, ruPrice, ruFaq, ruAbout, ruProgramInfo, ruPayForm, ruPrograms, ruPages, ruBtn, enBtn } from './lang/ru.js';
import { enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, enPayForm, enPrograms, enPages } from './lang/en.js';
import { programs, productBuy, goLang } from './switchLang.js';

window.addEventListener('load', () => {

  // Скрытие прелоадера

  body.querySelector('.preloader').classList.add('preloader--hidden');

  // Установка языка на странице

  if (localStorage.getItem('langRu', 'ru')) {
    page.setAttribute('lang', 'ru');
    ruBtn.classList.add('main-nav__button-lang--active');
    goLang(ruIndex, ruOther, ruIndexImg, ruPrice, ruFaq, ruAbout, ruProgramInfo, ruPayForm, ruPrograms, ruPages);
  } else if (!localStorage.getItem('langEn', 'en') && !localStorage.getItem('langRu', 'ru') || localStorage.getItem('langEn', 'en')) {
    page.setAttribute('lang', 'en');
    enBtn.classList.add('main-nav__button-lang--active');
    goLang(enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, enPayForm, enPrograms, enPages);
  }

  // Проверка текущей страницы на соответствие странице товара, для создания карточки платежа

  for (const program of programs) {
    if (body.classList.contains(program)) {
      const pay = body.querySelector('.pay');
      const payForm = pay.querySelector('.pay__form');

      // Появление/исчезновение формы

      productBuy.addEventListener('click', () => {
        page.style.overflow = 'hidden';
        pay.classList.add('pay--active');
      });

      pay.querySelector('.pay__cancel').addEventListener('click', () => {
        page.removeAttribute('style');
        pay.classList.remove('pay--active');
      });

      // Получение почты и отправка программы

      payForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        sendData();
      });

      // Для русскоязычных пользователей

      const sendData = async () => {
        if (page.getAttribute('lang') === 'ru') {
          try {
            const response = await fetch(
              'https://andrestatix.com:8443/server',
              {
                method: 'POST',
                body: new URLSearchParams(new FormData(payForm)),
              }
            );
            const data = await response.text();
            window.location = data;
          } catch (error) {
            console.log(error);
          }
        }
      };

      // Для англоязычных пользователей

      pay.querySelector('.pay__submit').addEventListener('click', () => {
        if (page.getAttribute('lang') === 'en') {
          window.location = 'https://paypal.me/andreipakin';
        }
      });
    }
  }
});
