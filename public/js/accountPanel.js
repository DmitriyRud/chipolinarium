const { newCategory } = document.forms;

const createCategory = document.querySelector('.createCategory');
const inputs = document.querySelectorAll('input');

const approvedFeedback = document.querySelector('.approved_feedback');

const cardFeedback = document.querySelector('.card_feedback');

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

cardFeedback.addEventListener('click', async (e) => {
  e.preventDefault();
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('approved')
  ) {
    const response = await fetch(`/accountPanel/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.id }),
    });
    const result = await response.json();
    if (result.msg) {
      approvedFeedback.innerText = result.msg;
      setTimeout(() => {
        approvedFeedback.innerText = '';
      }, 2000);
      const cardBody = document.getElementById(`card-${e.target.id}`);
      cardBody.remove();
    } else if (result.error) {
      approvedFeedback.innerText = result.error;
      setTimeout(() => {
        approvedFeedback.innerText = '';
      }, 2000);
    }
  } else if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('non-approved')
  ) {
    
  }
});

// approvedButtons.forEach((btn) => {
//   btn.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log(e.target.parentNode.parentNode);
//     try {
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });
