const { logForm } = document.forms;
const paragraph = document.querySelector('.paragraph');
logForm.addEventListener('click', async (e) => {
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);

  if (e.target.tagName === 'BUTTON') {
    if (!res.email || !res.password) {
      paragraph.innerText = `Заполните все поля`;
    } else {
      try {
        const response = await fetch('/adminPanel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        const result = await response.json();

        const msg = document.querySelector('.logMsg');

        if (result.err) {
          msg.innerText = result.err;
        } else if (result.msg) {
          window.location.href = '/accountPanel';
        }
      } catch (error) {
        console.log('Что-то пошло не так');
      }
    }
  }
});
