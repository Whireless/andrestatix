import axios from 'axios';

const page = document.querySelector('html');
const popup = page.querySelector('.pay');
const close = popup.querySelector('.pay__close');
const form = popup.querySelector('.pay__form');
const buyButtons = page.querySelectorAll('.programs__button-buy');

// Открытие оплаты

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.querySelector('.pay__level-value').textContent = button.dataset.level;
    popup.querySelector('.pay__price-value').textContent = button.dataset.price;

    popup.querySelector('.pay__level').setAttribute('value', button.dataset.level);
    popup.querySelector('.pay__price').setAttribute('value', button.dataset.price);

    popup.classList.add('pay--active');
    page.style.overflow = 'hidden';
  });
});

// Закрытие оплаты кнопкой

close.addEventListener('click', () => {
  popup.classList.remove('pay--active');
  page.removeAttribute('style');
});

// Получение почты и отправка программы

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData();
});

const sendData = async () => {

  // Для русскоязычных пользователей

  if (page.getAttribute('lang') === 'ru') {
    try {
      const response = await axios.post('https://andrestatix.com:8443/server', new URLSearchParams(new FormData(form)));
      window.location = response.data;
      form.querySelector('.pay__input--email').value = '';
    } catch (error) {console.log(error)}
  } else {

    // Для англоязычных пользователей

    window.location = 'https://paypal.me/andreipakin';
  }
};

export { page, popup };
