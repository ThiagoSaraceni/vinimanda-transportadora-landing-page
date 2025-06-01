const menuButton = document.getElementById("hamburguer-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
