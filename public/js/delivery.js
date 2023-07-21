const deliveryTable = document.getElementById('delivery_table');
const paragraph = document.querySelector('.alert_table');
const newDelivery = document.getElementById('newDelivery');
const closeFormBtn = document.querySelector('.closeFormBtn');
const deliveryForm = document.getElementById('deliveryForm');

deliveryTable.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    try {
      const id = e.target.dataset.deleteDelivery;
      const response = await fetch(`/delivery/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result.msg) {
        const tr = document.getElementById(`tr-${id}`);
        tr.remove();
      } else if (result.error) {
        paragraph.innerText = result.error;
      }
    } catch (err) {
      console.log(err);
    }
  }
});

newDelivery.addEventListener('click', (event) => {
  deliveryForm.style.display = 'block';
  newDelivery.style.display = 'none';
});

closeFormBtn.addEventListener('click', (event) => {
  deliveryForm.style.display = 'none';
  newDelivery.style.display = 'block';
});

deliveryForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const formData = new FormData(deliveryForm);
  const inputs = Object.fromEntries(formData);
  if (
    e.target.classList.contains('addFormBtn') &&
    e.target.tagName === 'BUTTON'
  ) {
    console.log('=============>');
    try {
      const response = await fetch('/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      if (result.msg) {
        paragraph.innerText = result.msg;
        deliveryForm.style.display = 'none';
        const tr = document.createElement('tr');
        tr.setAttribute('key', result.id);
        tr.setAttribute('id', `tr-${result.id}`);
        const tdValue = Object.values(result);
        tdValue.shift();
        for (let i = 0; i < 2; i += 1) {
          const td = document.createElement('td');
          td.innerText = tdValue[i];
          tr.appendChild(td);
        }
        const td = document.createElement('td');
        td.innerHTML = ` <button
        type="button"
        class="btn usual-btn"
        data-delete-delivery="${result.id}"
        id="${result.id}"
      >
        Удалить
      </button>`;
        tr.appendChild(td);
        const tBody = document.querySelector('tbody');
        tBody.appendChild(tr);
        newDelivery.style.display = 'block';
        // window.location.reload();
      } else if (result.error) {
        paragraph.innerText = result.error;
      }
    } catch (err) {
      console.log(err);
    }
  }
});
