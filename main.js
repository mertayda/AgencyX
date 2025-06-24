const hamburgerBtn = document.querySelector(".hamburger-btn");
const navItems = document.querySelector(".nav-items");

hamburgerBtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
});