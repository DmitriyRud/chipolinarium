const containerCategory = document.querySelector('.containerCategory');

containerCategory.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('deleteBtn')) {
    const response = await fetch(`/catalog/${event.target.dataset.delid}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.msg) {
      event.target.closest('.card').remove();
    }
  }
});
