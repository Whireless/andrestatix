import {page, body} from './main.js';
import {allProducts, productBuy} from './switchLang.js';

// Проверка текущей страницы на соответствие странице товара, для создания карточки платежа
window.addEventListener('load', () => {
  allProducts.forEach(pages => {
    if (body.classList.contains(pages)) {
      const pay = body.querySelector('.pay');
      const payForm = pay.querySelector('.pay__form');
      const payCancel = pay.querySelector('.pay__cancel');

      //Появление/исчезновение формы
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

      const sendData = async () => {
        if(page.getAttribute('lang') === 'ru') {
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
        } else {
          window.location = 'https://paypal.me/andreipakin';
        }
      };
    }
  });
});
