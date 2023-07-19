const { newCategory } = document.forms;

newCategory.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(newCategory);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/accountPanel', {
      method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title: inputs.title, image: inputs.photo.name }),
      body: data
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log('owibka', error);
  }
});
