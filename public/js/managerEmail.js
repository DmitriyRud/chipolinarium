const managerForm = document.querySelector('.manager_form');
const managerMessage = document.querySelector('.manager_message');

managerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(managerForm);
  const input = Object.fromEntries(data);

  try {
    const response = await fetch('/accountPanel/manager', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const result = await response.json();
    console.log(result);
    if (result.email) {
      managerMessage.innerText = 'Почта менеджера успешно добавлена';
    } else if (result.msg) {
      managerMessage.innerText = result.msg;
    }
  } catch (error) {
    console.log('owibka', error);
  }
});
