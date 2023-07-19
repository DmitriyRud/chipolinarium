//const containerCategory = document.querySelector(".containerCategory");
//const cardBtn = document.querySelectorAll('.card-btn');
//console.log(containerCategory);
// cardBtn.forEach(container => {
//     container.addEventListener('click', async(event) => {
//         event.preventDefault()
//         if (event.target.classList.contains('deleteBtn')){
//             console.log("111");
//         }
//     })
// })
// containerCategory.addEventListener("click", async (event) => {
//     event.preventDefault()
//   if (event.target.classList.contains("deleteBtn")) {
   
//     // const a =  document.querySelector('.deleteBtn')
   
//     const response = await fetch(`/catalog/${event.target.dataset.delid}`, {
//       method: "DELETE",
//     });
//     const result = await response.json();
//     console.log(result);
//   }
  
// });
