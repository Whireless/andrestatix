import { page, body } from './main.js';

const productBuy = body.querySelector('.red-button--buy');

// Список страниц с тренировками

const programs = [
  'main-product--street-zero',
  'main-product--street-beginner',
  'main-product--street-medium',
  'main-product--street-advanced',
  'main-product--force-basic',
  'main-product--force-pro',
];

// Переключение языка

const goLang = (langIndex, langOther, langIndexImg, langPrice, langFaq, langAbout, langProgramInfo, payForm, langPrograms) => {
  const trainBtn = body.querySelector('.red-button');
  const navAbout = body.querySelector('.main-nav__link--about');
  const copyright = body.querySelector('.main-footer__copyright');
  const title = page.querySelector('title');

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
      page.getAttribute('lang') === 'ru' ? price.textContent = `${langPrice[i]} ₽` : price.textContent = `${langPrice[i]} $`;
    });
  } else if (body.classList.contains('main-faq')) {

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

    title.textContent = langIndex.about;
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

  programs.forEach((program, i) => {
    if (body.classList.contains(program)) {

      // Страница текущей программы

      const productImg = body.querySelector('.product__img');
      const productPrice = body.querySelector('.product__price');
      const programIntro = body.querySelector('.product__intro');
      const programTitles = body.querySelectorAll('.product__title');
      const programItem = body.querySelectorAll('.product__item');

      // Форма с информацией об оплате

      const payLabel = body.querySelector('.pay__form label');
      const payDirection = body.querySelector('.pay__item--programm');
      const payLevel = body.querySelector('.pay__item--level');
      const payPrice = body.querySelector('.pay__item--price');
      const payValue = body.querySelector('.pay__price');
      const paySubmit = body.querySelector('.pay__submit');
      const payMail = body.querySelector('.pay__email');

      page.getAttribute('lang') === 'ru' ? title.textContent = `${langPrograms[i]} уровень` : title.textContent = `${langPrograms[i]} level`;

      productImg.src = langProgramInfo.img[i];
      programIntro.textContent = langProgramInfo.intro[i];

      productBuy.textContent = langOther.buy;
      payLabel.textContent = payForm.mail;
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

      if (page.getAttribute('lang') === 'ru') {
        payLabel.style.display = 'block';
        payMail.style.display = 'block';
        productPrice.textContent = `${langPrice[i]} ₽`;
        payPrice.innerHTML = payForm.price + `<span class="pay__item-info">${langPrice[i]} ₽</span>`;
      } else {

        // Текст для иностранного поля оплаты, пока не настроена интеграция

        payLabel.textContent = 'On the payment page, in the "What is this for?" field, write the full name of the program you paid for and the E-MAIL to which it should be sent.';

        payMail.style.display = 'none';
        productPrice.textContent = `${langPrice[i]} $`;
        payPrice.innerHTML = payForm.price + `<span class="pay__item-info">${langPrice[i]} $</span>`;
      }
      payValue.setAttribute('value', langPrice[i]);
      paySubmit.textContent = payForm.goBuy;
    }
  });
};

export { goLang, programs, productBuy };
