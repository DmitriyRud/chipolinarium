const feedback = document.querySelector('.feedback');
const feedBackForm = document.querySelector('#feedBackForm');
const closeFormBtn = document.querySelector('.closeFormBtn');

feedback.addEventListener('click', (event) => {
  feedBackForm.style.display = 'block';
  feedback.style.display = 'none';
});

closeFormBtn.addEventListener('click', (event) => {
  feedBackForm.style.display = 'none';
  feedback.style.display = 'block';
});
