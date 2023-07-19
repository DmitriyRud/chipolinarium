const container = document.querySelector(".item-container");
console.log(container);
container.addEventListener("click", async (event) => {
  if (event.target.classList.contains("deleteBtn")) {
   
    const response = await fetch(`/catalog/item/${event.target.dataset.delid}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if  (result.msg){
        event.target.closest('.card').remove()
    }
  
  }
  
});