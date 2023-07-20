const buttonPrice = document.querySelector('.button_price');
const dialog = document.querySelector('#modalPrice');

const dialogForm = document.querySelector('.dialogForm');

const itemPriceRequest = document.querySelectorAll('.itemPriceRequest');

const modalPriceBtn = document.querySelector('.modalPriceBtn');

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

  modalPriceBtn.addEventListener('click', (event) => {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: '1shelldrunk1@gmail.com',
      Password: '4A25DFB1012A034E13C7762B688660EC8791',
      To: '1shelldrunk1@gmail.com',
      From: '1shelldrunk1@gmail.com',
      Subject: 'This is the subject',
      Body: `Посетитель сайта ${inputs.name} запросил актуальные цены.

      Информацию ему необходимо выслать на почту ${inputs.email}.

      Для уточнения данных пользователь оставил номер телефона: ${inputs.phone}`,
    }).then((message) => dialog.close());
  });

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
