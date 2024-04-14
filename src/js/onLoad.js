import { page, body } from './main.js';
import { ruIndex, ruOther, ruIndexImg, ruPrice, ruFaq, ruAbout, ruProgramInfo, ruPayForm, ruPrograms, ruBtn, enBtn } from './lang/ru.js';
import { enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, enPayForm, enPrograms } from './lang/en.js';
import { programs, productBuy, goLang } from './switchLang.js';
import axios from 'axios';

window.addEventListener('load', () => {

  // Скрытие прелоадера

  body.querySelector('.preloader').classList.add('preloader--hidden');

  // Установка языка на странице

  if (localStorage.getItem('langRu', 'ru')) {
    page.setAttribute('lang', 'ru');
    ruBtn.classList.add('main-nav__button-lang--active');
    goLang(ruIndex, ruOther, ruIndexImg, ruPrice, ruFaq, ruAbout, ruProgramInfo, ruPayForm, ruPrograms);
  } else if (!localStorage.getItem('langEn', 'en') && !localStorage.getItem('langRu', 'ru') || localStorage.getItem('langEn', 'en')) {
    page.setAttribute('lang', 'en');
    enBtn.classList.add('main-nav__button-lang--active');
    goLang(enIndex, enOther, enIndexImg, enPrice, enFaq, enAbout, enProgramInfo, enPayForm, enPrograms);
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

        const email = payForm.querySelector('.pay__email');
        page.getAttribute('lang') === 'en' ? email.required = false : email.required = true;
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

      const sendData = async () => {

        // Для русскоязычных пользователей

        if (page.getAttribute('lang') === 'ru') {
          try {
            const response = await axios.post('https://andrestatix.com:8443/server', new URLSearchParams(new FormData(payForm)));
            window.location = response.data;
            payForm.querySelector('.pay__email').value = '';
          } catch (error) {console.log(error)}
        } else {

          // Для англоязычных пользователей

          window.location = 'https://paypal.me/andreipakin';
        }
      };

      // Отправка через Fetch API

      // const sendData = async () => {
      //   if (page.getAttribute('lang') === 'ru') {
      //     try {
      //       const response = await fetch('https://andrestatix.com:8443/server', {
      //           method: 'POST',
      //           body: new URLSearchParams(new FormData(payForm)),
      //         }
      //       );
      //       const data = await response.text();
            // window.location = data;
      //     } catch (error) {console.log(error)}
      //   } else {
      //     // Для англоязычных пользователей

      //     window.location = 'https://paypal.me/andreipakin';
      //   }
      // };
    }
  };
});

// Смена цвета навигации на планшете и компе

window.addEventListener('scroll', () => {
  const menu = body.querySelector('.main-nav');

  if (window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches && window.pageYOffset > 375) {
    menu.style.backgroundColor = '#000000';
  } else if (window.matchMedia('(min-width: 1280px)').matches && window.pageYOffset > 585) {
    menu.style.backgroundColor = '#000000';
  } else if (window.matchMedia('(max-width: 767px)').matches) {
    menu.style.backgroundColor = '#000000';
  } else {
    menu.style.backgroundColor = '#5a1f1d';
  }
});
