const page = document.querySelector('html');
const body = page.querySelector('body');
const menu = body.querySelector('.main-nav__menu-list');
const ruBtn = body.querySelector('.main-nav__button-lang--ru');
const enBtn = body.querySelector('.main-nav__button-lang--en');
const menuItem = menu.querySelectorAll('.main-nav__link');
const menuBtn = body.querySelector('.main-nav__menu-button');

//Мобильное меню
menuBtn.onclick = function () {
  menu.classList.toggle('main-nav__menu-list--open')
};

menuItem.forEach(a => {
  a.onclick = function () {
    menu.classList.remove('main-nav__menu-list--open')
  };
});

//Переключение языка
const navAbout = body.querySelector('.main-nav__link--about');
const quote = body.querySelector('.intro__title');
const intro = body.querySelector('.intro__subtitle');
const programTitle = body.querySelector('.programs__title');
const programs = body.querySelectorAll('.programs__program-name');
const copyright = body.querySelector('.main-footer__copyright');
const imgOnIndex = body.querySelectorAll('.programs__img');
const price = body.querySelectorAll('.programs__price');
const questions = body.querySelector('.questions__title');
const question = body.querySelectorAll('.questions__question');
const answer = body.querySelectorAll('.questions__answer');
const trainBtn = body.querySelector('.red-button');
const aboutTitle = body.querySelector('.about-me__title');
const aboutSubtitles = body.querySelectorAll('.about-me__subtitle');
const aboutDescriptions = body.querySelectorAll('.about-me__description');
const resultSubtitles = body.querySelectorAll('.about-me__results-subtitle');
const resultItem = body.querySelectorAll('.about-me__item');
const productImg = body.querySelector('.product__img');
const productDescription = body.querySelector('.product__description');
const productPrice = body.querySelector('.product__price');
const productGo = body.querySelectorAll('.product__button-go');
const productBuy = body.querySelector('.red-button--buy');

const goLang = (langNav, langIndex, langOther, langIndexImg, langPrice, langFaq, langAbout, langBtns, langStreetInfo, langForceInfo) => {
  navAbout.textContent = langNav.about;
  copyright.textContent = langOther.copy;

  if (body.classList.contains('main-index')) {
    quote.textContent = langIndex.quote;
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
    questions.textContent = langFaq.faq;

    question.forEach((q, i) => {
      q.textContent = langFaq.questions[i];
    });

    answer.forEach((a, i) => {
      a.textContent = langFaq.answers[i];
    });

    trainBtn.textContent = langBtns.train;
  } else if (body.classList.contains('main-about')) {
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

    trainBtn.textContent = langBtns.train;
  } else if (body.classList.contains('main-product--street-basic')) {
    productImg.src = langStreetInfo.img[0];
    productDescription.textContent = langStreetInfo.desc[0];
    productPrice.textContent = langPrice[0];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.easy;
  } else if (body.classList.contains('main-product--street-easy')) {
    productImg.src = langStreetInfo.img[1];
    productDescription.textContent = langStreetInfo.desc[1];
    productPrice.textContent = langPrice[1];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.basic;
    productGo[1].textContent = langBtns.middle;
  } else if (body.classList.contains('main-product--street-middle')) {
    productImg.src = langStreetInfo.img[2];
    productDescription.textContent = langStreetInfo.desc[2];
    productPrice.textContent = langPrice[2];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.easy;
    productGo[1].textContent = langBtns.pro;
  } else if (body.classList.contains('main-product--street-pro')) {
    productImg.src = langStreetInfo.img[3];
    productDescription.textContent = langStreetInfo.desc[3];
    productPrice.textContent = langPrice[3];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.middle;
  } else if (body.classList.contains('main-product--force-basic')) {
    productImg.src = langForceInfo.img[0];
    productDescription.textContent = langForceInfo.desc[0];
    productPrice.textContent = langPrice[4];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.pro;
  } else if (body.classList.contains('main-product--force-pro')) {
    productImg.src = langForceInfo.img[1];
    productDescription.textContent = langForceInfo.desc[1];
    productPrice.textContent = langPrice[5];
    productBuy.textContent = langOther.buy;
    productGo[0].textContent = langBtns.easy;
  }
};

export {ruBtn, enBtn, goLang, page, body, productBuy};
