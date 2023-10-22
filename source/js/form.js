import {page, body, productBuy, allPages} from './main.js';

// Проверка текущей страницы на соответствие странице товара, для создания карточки платежа
window.addEventListener('load', () => {
  allPages.forEach(pages => {
    if (body.classList.contains(pages)) {

      // Стоковые кнопки на форме
      const pay = body.querySelector('.pay');
      const payCancel = pay.querySelector('.pay__cancel');
      const payForm = pay.querySelector('.pay__form');

      //Появление формы
      productBuy.onclick = function () {
        page.style.overflow = 'hidden';
        pay.classList.add('pay--active');
      };

      payCancel.onclick = function () {
        page.removeAttribute('style');
        pay.classList.remove('pay--active');
      };

      //Получение почты и отправка программы
      payForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        sendData();
      });
    }
  });
});

const sendData = async () => {
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
};
