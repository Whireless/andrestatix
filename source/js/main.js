// Переменные для всех страниц
const page = document.querySelector('html');
const body = page.querySelector('body');
const menu = body.querySelector('.main-nav__menu-list');
const ruBtn = body.querySelector('.main-nav__button-lang--ru');
const enBtn = body.querySelector('.main-nav__button-lang--en');
const menuItem = menu.querySelectorAll('.main-nav__link');
const navAbout = body.querySelector('.main-nav__link--about');
const menuBtn = body.querySelector('.main-nav__menu-button');
const copyright = body.querySelector('.main-footer__copyright');

// Preloader
window.addEventListener('load', () => {
  const preloader = page.querySelector('.preloader');
  preloader.classList.add('preloader--hidden');
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

// Кнопки
const trainBtn = body.querySelector('.red-button');
const productBuy = body.querySelector('.red-button--buy');

// Список страниц с тренировками
const allPages = [
  'main-product--street-basic',
  'main-product--street-easy',
  'main-product--street-middle',
  'main-product--street-pro',
  'main-product--force-basic',
  'main-product--force-pro',
];

// Переключение языка
const goLang = (langIndex, langOther, langIndexImg, langPrice, langFaq, langAbout, langProgramInfo, payForm, langPrograms) => {
  navAbout.textContent = langIndex.about;
  copyright.textContent = langOther.copy;

  if (body.classList.contains('main-index')) {
    // "Главная"
    const intro = body.querySelector('.intro__subtitle');
    const programTitle = body.querySelector('.programs__title');
    const programs = body.querySelectorAll('.programs__program-name');
    const imgOnIndex = body.querySelectorAll('.programs__img');
    const price = body.querySelectorAll('.programs__price');

    intro.textContent = langIndex.intro;
    programTitle.textContent = langIndex.programs;
    programs[0].textContent = langIndex.street;
    programs[1].textContent = langIndex.force;

    imgOnIndex.forEach((img, i) => {
      img.src = langIndexImg[i];
    });

    price.forEach((price, i) => {
      price.textContent = langPrice[i];
    });
  }  else if (body.classList.contains('main-faq')) {
    // "FAQ"
    const questions = body.querySelector('.questions__title');
    const question = body.querySelectorAll('.questions__question');
    const answer = body.querySelectorAll('.questions__answer');

    questions.textContent = langFaq.faq;

    question.forEach((q, i) => {
      q.textContent = langFaq.questions[i];
    });

    answer.forEach((a, i) => {
      a.textContent = langFaq.answers[i];
    });
    trainBtn.textContent = langOther.train;
  } else if (body.classList.contains('main-about')) {
    // "Обо мне"
    const aboutTitle = body.querySelector('.about-me__title');
    const aboutSubtitles = body.querySelectorAll('.about-me__subtitle');
    const aboutDescriptions = body.querySelectorAll('.about-me__description');
    const resultSubtitles = body.querySelectorAll('.about-me__results-subtitle');
    const resultItem = body.querySelectorAll('.about-me__item');

    aboutTitle.textContent = langAbout.title;

    aboutSubtitles.forEach((st, i) => {
      st.textContent = langAbout.subtitles[i];
    });

    aboutDescriptions.forEach((desc, i) => {
      desc.textContent = langAbout.descriptions[i];
    });

    resultSubtitles[0].textContent = langAbout.resultA;
    resultItem[0].textContent = langAbout.resultAInfo.a;
    resultItem[1].textContent = langAbout.resultAInfo.b;
    resultSubtitles[1].textContent = langAbout.resultB;
    resultItem[2].textContent = langAbout.resultBInfo.a;
    resultItem[3].textContent = langAbout.resultBInfo.b;
    resultItem[4].textContent = langAbout.resultBInfo.c;
    trainBtn.textContent = langOther.train;
  }

  allPages.forEach((page, i) => {
    if (body.classList.contains(page)) {
      // Страница текущей программы
      const productImg = body.querySelector('.product__img');
      const productPrice = body.querySelector('.product__price');
      const programIntro = body.querySelector('.product__intro');
      const programTitles = body.querySelectorAll('.product__title');
      const programItem = body.querySelectorAll('.product__item');

      // Форма с информацией об оплате
      const mail = body.querySelector('.pay__form label');
      const payDirection = body.querySelector('.pay__item--programm');
      const payLevel = body.querySelector('.pay__item--level');
      const payPrice = body.querySelector('.pay__item--price');
      const paySubmit = body.querySelector('.pay__submit');

      productImg.src = langProgramInfo.img[i];
      programIntro.textContent = langProgramInfo.intro[i];

      productPrice.textContent = langPrice[i];
      productBuy.textContent = langOther.buy;
      mail.textContent = payForm.mail;
      if (i <= 3) {
        programTitles[0].textContent = langProgramInfo.subtitles[0];
        programTitles[1].textContent = langProgramInfo.subtitles[1];
        programItem.forEach((item, index) => {
          item.textContent = langProgramInfo.items[i][index];
        });

        payDirection.innerHTML = payForm.direction + `<span class="pay__item-info">${langIndex.street}</span>`;
      } else {
        payDirection.innerHTML = payForm.direction + `<span class="pay__item-info">${langIndex.force}</span>`;
      }
      payLevel.innerHTML = payForm.level + `<span class="pay__item-info">${langPrograms[i]}</span>`;
      payPrice.innerHTML = payForm.price + `<span class="pay__item-info">${langPrice[i]}</span>`;
      paySubmit.textContent = payForm.goBuy;
    }
  });
};

export {ruBtn, enBtn, goLang, page, body, productBuy, allPages};
