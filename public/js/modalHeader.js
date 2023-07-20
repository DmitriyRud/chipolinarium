const buttonPrice = document.querySelector('.button_price');
const dialog = document.querySelector('#modalPrice');

const dialogForm = document.querySelector('.dialogForm');

const itemPriceRequest = document.querySelectorAll('.itemPriceRequest');

buttonPrice.addEventListener('click', (event) => {
  dialog.showModal();
});

itemPriceRequest.forEach((el) => {
  el.addEventListener('click', (event) => {
    dialog.showModal();
  });
});

dialogForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(dialogForm);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/modalpice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
  } catch (error) {
    console.log('что-то пошло не так', error);
  }
});
