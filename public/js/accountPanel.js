const { newCategory } = document.forms;

const createCategory = document.querySelector('.createCategory');
const inputs = document.querySelectorAll('input');

newCategory.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(newCategory);

  try {
    const response = await fetch('/accountPanel', {
      method: 'POST',
      body: data,
    });
    const result = await response.json();
    if (result.msg) {
      createCategory.innerText = result.msg;
      inputs.forEach((el) => (el.value = ''));
    } else if (result.error) {
      createCategory.innerText = result.error;
    } else {
      createCategory.innerText = 'Ошибка базы данных';
    }
  } catch (error) {
    console.log('owibka', error);
  }
});
