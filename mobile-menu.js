const menu = document.querySelector(".mobile-menu");
const openButton = document.querySelector(".menu-btn-open");
const closeButton = document.querySelector(".menu-btn-close");
openButton.addEventListener("click", () => {
  menu.style.display = "block";
});
closeButton.addEventListener("click", () => {
  menu.style.display = "none";
});
