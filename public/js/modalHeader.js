const buttonPrice = document.querySelector('.button_price');
const dialog = document.querySelector('#modalPrice');

const dialogForm = document.querySelector('.dialogForm');

const itemPriceRequest = document.querySelectorAll('.itemPriceRequest');

const modalPriceBtn = document.querySelector('.modalPriceBtn');

const modalList = document.querySelector('.modal_list');

const closeModalWindow = document.querySelector('.closeModalWindow');

buttonPrice.addEventListener('click', (event) => {
  dialog.showModal();
});

itemPriceRequest.forEach((el) => {
  el.addEventListener('click', (event) => {
    dialog.showModal();
  });
});

modalList.addEventListener('click', (event) => {
  dialog.showModal();
});

closeModalWindow.addEventListener('click', (event) => {
  dialog.close();
});

dialogForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(dialogForm);
  const inputs = Object.fromEntries(data);
  dialog.close();
  //   modalPriceBtn.addEventListener('click', (event) => {
  //     Email.send({
  //       Host: 'smtp.elasticemail.com',
  //       Username: '1shelldrunk1@gmail.com',
  //       Password: '4A25DFB1012A034E13C7762B688660EC8791',
  //       To: 'lisa_21spb@mail.ru',
  //       From: '1shelldrunk1@gmail.com',
  //       Subject: 'This is the subject',
  //       Body: `Посетитель сайта ${inputs.name} запросил актуальные цены.

  //       Информацию ему необходимо выслать на почту ${inputs.email}.

  //       Для уточнения данных пользователь оставил номер телефона: ${inputs.phone}`,
  //     }).then((message) => dialog.close());
  //   });

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
