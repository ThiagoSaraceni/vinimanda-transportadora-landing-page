const menuButton = document.getElementById("hamburguer-icon");
const mobileMenu = document.getElementById("mobile-menu");
const btnBack = document.getElementById("btn-back");
const imgTruck = document.querySelector(".img-truck");
const mainInfo = document.querySelector(".hero-content");
const cardsArticle = document.querySelectorAll(".cards article");
const ourCompanyLeftSide = document.querySelectorAll(".left-side");
const principles = document.querySelectorAll(".principios article");
const frotas = document.querySelectorAll(".veiculos figure");

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const elementsToObserve = [
  imgTruck,
  mainInfo,
  ...cardsArticle,
  ...ourCompanyLeftSide,
  ...principles,
  ...frotas,
];

elementsToObserve.forEach((el) => {
  myObserver.observe(el);
});

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

btnBack.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

const goToAboutUs = () => {
  document.getElementById("beneficios").scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("open");
};

const goToCompany = () => {
  document.getElementById("empresa").scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("open");
};

const goToFleets = () => {
  document.getElementById("frotas").scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("open");
};

const goToContacts = () => {
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
  mobileMenu.classList.remove("open");
};

const backTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
