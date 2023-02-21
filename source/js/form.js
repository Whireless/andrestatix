import {page, body, productBuy} from './main.js';

// Стоковые кнопки на форме
const pay = body.querySelector('.pay');
const payCancel = pay.querySelector('.pay__cancel');
let payMail = pay.querySelector('.ym-input');
const payBtn = pay.querySelector('.ym-btn-pay');
const payPrice = pay.querySelector('.ym-product-price');

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
payBtn.onclick = function () {
  if (page.getAttribute('lang', 'en')) {
    sendEnProgram();
  } else if (page.getAttribute('lang', 'ru')) {
    sendRuProgram();
  }
};
