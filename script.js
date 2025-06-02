const menuButton = document.getElementById("hamburguer-icon");
const mobileMenu = document.getElementById("mobile-menu");
const btnBack = document.getElementById("btn-back");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

btnBack.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
