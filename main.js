const hamburgerBtn = document.querySelector(".hamburger-btn");
const navItems = document.querySelector(".nav-items");

hamburgerBtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
});



const filterBtns = document.querySelectorAll(".filter-btn");
const serviceCard = document.querySelectorAll(".service-card")
const serviceGrid = document.querySelector(".services-grid")

const servicesCardChildren = Array.from(serviceGrid.children);


filterBtns.forEach((btns) => {
   btns.addEventListener("click", (e) => {
      const filterValue = e.target.dataset.filter;
      
      servicesCardChildren.forEach((servicesCard) => {
          const cardCategory = servicesCard.dataset.category;
          if(filterValue === "all" || filterValue === cardCategory){
              servicesCard.style.display = "block"
          } else {
              servicesCard.style.display = "none"
          }
      })
     
   })
})
