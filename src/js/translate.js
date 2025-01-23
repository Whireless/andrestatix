import ru from '/src/translate/ru.json' with { type: 'json' };
import en from '/src/translate/en.json' with { type: 'json' };

const page = document.querySelector('html');
const select = page.querySelector('.main-nav__langs');
const storage = window.localStorage;

select.addEventListener('change', () => {

  // Смена языка по изменению select

  if (select.value === 'en') {
    setLanguage(en);
    storage.setItem('lang', 'en');
    page.setAttribute('lang', 'en');
  } else {
    setLanguage(ru);
    storage.setItem('lang', 'ru');
    page.setAttribute('lang', 'ru');
  }
});

// Подстановка новых языковых данных в элемент

const setText = (elem, text, isArr, arr) => {
  if (text) {
    elem.textContent = text;
  }

  if (isArr) {
    elem.forEach((item, i) => {
      item.textContent = arr[i];
    });
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
    setText(program.querySelector('.programs__target-program'), lang.programs.subtitle);
    setText(program.querySelectorAll('.programs__target'), null, true, lang.programs.street[i].targets);
    setText(program.querySelector('.programs__price'), lang.programs.street[i].price);
    setText(program.querySelector('.programs__button-buy'), lang.buttons[0]);
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
};

// Переключение языка при загрузке страницы

window.addEventListener('load', () => {
  const lang = storage.getItem('lang');
  if (lang === 'en') {
    setLanguage(en);
    select.querySelector('.main-nav__lang--en').setAttribute('selected', '');
    page.setAttribute('lang', 'en');
  } else {
    setLanguage(ru);
    select.querySelector('.main-nav__lang--ru').setAttribute('selected', '');
    page.setAttribute('lang', 'ru');
  }
});
