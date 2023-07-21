const formRequestPriceHome = document.querySelector('.formRequestPriceHome');
const priceFormDescription = document.querySelector('.formOnHome');
const inputsOnHome = document.querySelectorAll('input');

formRequestPriceHome.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(formRequestPriceHome);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/modalpice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    priceFormDescription.innerText = 'Ваше письмо отправлено! Менеджеры свяжутся с Вами в ближайшее время.';

    inputsOnHome.forEach((el) => (el.value = ''));
  } catch (error) {
    console.log('что-то пошло не так', error);
  }
});
