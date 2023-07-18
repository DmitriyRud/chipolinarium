const { logForm } = document.forms;
const alert = document.querySelector('.alert');
logForm.addEventListener('click', async (e) => {
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  console.log(data);
  if (e.target.tagName === 'BUTTON') {
    if (!res.email || !res.password) {
      alert.innerText = `<p>Заполните все поля</p>`;
    } else {
      try {
        const response = await fetch('/loginPanel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        const result = await response.json();
        console.log('response:', result);
        const msg = document.querySelector('.logMsg');

        if (result.err) {
          msg.innerText = result.err;
        } else {
          alert(result.msg);
          window.location.href = '/accountPanel';
        }
      } catch (error) {
        console.log('Что-то пошло не так');
      }
    }
  }
});
