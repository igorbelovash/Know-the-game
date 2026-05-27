import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.modal-form');
const modal = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-close');

form.addEventListener('submit', handleSubmit);
closeBtn.addEventListener('click', closeOrderModal);
modal.addEventListener('click', handleBackdropClick);

let dessertsId = null;

export function setDessertId(id) {
  dessertsId = id;
}

// відкриття модалки
export function openOrderModal() {
  modal.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

// закриття модалки
export function closeOrderModal() {
  modal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeOrderModal();
  }
}

// submit форми
async function handleSubmit(event) {
  event.preventDefault();

  const { username, phone, textComment } = event.target.elements;

  const formData = {
    name: username.value.trim(),
    phone: phone.value.trim(),
    dessertId: dessertsId,
    comment: textComment.value.trim(),
  };

  try {
    const res = await axios.post(
      'https://deserts-store.b.goit.study/api/orders',
      formData
    );

    const orderData = res.data;

    iziToast.success({
      title: `${orderData.name}`,
      message: `Ви замовили ${orderData.dessertName}, номер замовлення ${orderData.orderNum}`,
      position: 'topRight',
    });

    event.target.reset();
    closeOrderModal();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: error.message,
      position: 'topRight',
    });
  }
}