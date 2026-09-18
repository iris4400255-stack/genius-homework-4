const modal = document.querySelector(".backdrop");
const openModalBtn = document.querySelector("#hero .button");
const closeModalBtn = document.querySelector(".modal__close");
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-hidden");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("is-hidden");
});
