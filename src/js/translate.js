import ru from '/src/translate/ru.json' with { type: 'json' };
import en from '/src/translate/en.json' with { type: 'json' };

import { page, popup } from './pay.js';

const select = page.querySelector('.main-nav__langs');
const storage = window.localStorage;

// Смена языка по изменению select

select.addEventListener('change', () => setPageLang(select.value, true));

// Переключение языка при загрузке страницы

window.addEventListener('load', () => setPageLang(storage.getItem('lang')));

// Подстановка новых языковых данных в элемент

const setText = (elem, text, isArr, arr) => {
  if (text) elem.textContent = text;

  if (isArr) elem.forEach((item, i) => item.textContent = arr[i]);
};

// Установка глобального атрибута языка странице и изменение input в попапе оплаты

const setPageLang = (lang, change) => {
  if (lang === 'en') {
    setLanguage(en);
    page.setAttribute('lang', 'en');
    select.querySelector('.main-nav__lang--en').setAttribute('selected', '');
    popup.querySelector('.pay__input--email').style.display = 'none';
    popup.querySelector('.pay__input--email').required = false;
    popup.querySelector('.pay__label--checkbox').style.display = 'flex';
    popup.querySelector('.pay__input--checkbox').required = true;
    if (change) storage.setItem('lang', 'en');
  } else {
    setLanguage(ru);
    page.setAttribute('lang', 'ru');
    select.querySelector('.main-nav__lang--ru').setAttribute('selected', '');
    popup.querySelector('.pay__label--checkbox').style.display = 'none';
    popup.querySelector('.pay__input--checkbox').required = false;
    popup.querySelector('.pay__input--email').style.display = 'block';
    popup.querySelector('.pay__input--email').required = true;
    if (change) storage.setItem('lang', 'ru');
  }
};

// Переключение языка

const setLanguage = (lang) => {

  // Элементы для превода

  const navList = page.querySelectorAll('.main-nav__link');

  const introTitle = page.querySelector('.intro__title');
  const introDescription = page.querySelector('.intro__description');
  const introButtons = page.querySelectorAll('.intro__button');

  const aboutTitle = page.querySelector('.about__title');
  const aboutDescriptions = page.querySelectorAll('.about__description');
  const aboutButton = page.querySelector('.about__button');

  const resultsTitle = page.querySelector('.results__title');
  const resultsSuptitles = page.querySelectorAll('.results__suptitle');
  const resultsBeforeTitles = page.querySelectorAll('.results__item--before h4');
  const resultsBeforeDescriptions = page.querySelectorAll('.results__item--before p');
  const resultsAfterTitles = page.querySelectorAll('.results__item--after h4');
  const resultsAfterDescriptions = page.querySelectorAll('.results__item--after p');

  const programsTitle = page.querySelector('.programs__title');
  const streetPrograms = page.querySelectorAll('.programs__item');

  const faqTitle = page.querySelector('.faq__title');
  const faqItems = page.querySelectorAll('.faq__item');
  const faqButton = page.querySelector('.faq__go-train');

  const footerTitle = page.querySelector('.main-footer__title');
  const footerCopy = page.querySelector('.main-footer__copyright');

  const streetLabel = popup.querySelector('.pay__label');
  const streetLevel = popup.querySelector('.pay__span--level');
  const streetPrice = popup.querySelector('.pay__span--price');
  const streetBuy = popup.querySelector('.pay__submit');

  // Перевод

  setText(navList, null, true, lang.nav.list);
  introTitle.textContent = '';
  introTitle.insertAdjacentHTML('afterbegin',`${lang.intro.title.start} <span class="gold-gradient">${lang.intro.title.one}</span> ${lang.intro.title.middle} <span class="gold-gradient">${lang.intro.title.two}</span>`);
  setText(introDescription, lang.intro.description);
  setText(introButtons, null, true, lang.buttons);

  // Перевод "Обо мне"

  setText(aboutTitle, lang.about.title);
  setText(aboutDescriptions, null, true, lang.about.descriptions);
  setText(aboutButton, lang.buttons[0]);

  // Перевод результатов

  setText(resultsTitle, lang.results.title);
  setText(resultsSuptitles, null, true, lang.results.suptitles);
  setText(resultsBeforeTitles, null, true, lang.results.before.titles);
  setText(resultsBeforeDescriptions, null, true, lang.results.before.descriptions);
  setText(resultsAfterTitles, null, true, lang.results.after.titles);
  setText(resultsAfterDescriptions, null, true, lang.results.after.descriptions);

  // Перевод программ

  setText(programsTitle, lang.programs.title);
  streetPrograms.forEach((program, i) => {
    setText(program.querySelector('.programs__subtitle'), lang.programs.street[i].title);
    setText(program.querySelector('.programs__description'), lang.programs.street[i].description);
    setText(program.querySelector('.programs__suptitle--target'), lang.programs.suptitles[0]);
    setText(program.querySelector('.programs__suptitle--bonus'), lang.programs.suptitles[1]);
    // setText(program.querySelectorAll('.programs__program-list--target .programs__program-item'), null, true, lang.programs.street[i].targets);
    setText(program.querySelectorAll('.programs__program-item--target'), null, true, lang.programs.street[i].targets);
    setText(program.querySelectorAll('.programs__program-item--bonus'), null, true, lang.programs.street[i].bonuses);
    setText(program.querySelector('.programs__price'), lang.programs.street[i].price);
    setText(program.querySelector('.programs__button-buy'), lang.buttons[0]);

    program.querySelector('.programs__button-buy').dataset.level = lang.programs.street[i].data.level;
    program.querySelector('.programs__button-buy').dataset.price = lang.programs.street[i].data.price;
  });

  // Перевод FAQ

  setText(faqTitle, lang.faq.title);
  faqItems.forEach((item, i) => {
    setText(item.children[0], lang.faq.list[i].q);
    setText(item.children[1], lang.faq.list[i].a);
  });
  setText(faqButton, lang.buttons[2]);

  // Перевод футера

  setText(footerTitle, lang.footer.title);
  setText(footerCopy, lang.footer.copyright);

  // Перевод попапа

  setText(streetLabel, lang.popupStreet.label);
  setText(streetLevel, lang.popupStreet.level);
  setText(streetPrice, lang.popupStreet.price);
  setText(streetBuy, lang.popupStreet.go);
};
