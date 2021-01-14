const $footer = document.querySelector("footer");
const $btn = document.querySelector(".btn__whoAmI");
const $containerText = document.querySelector(".text__slaveOfTheCode");
const $lineSeparate = document.querySelector(".line__separate");
const $detailsContainer = document.querySelector(".details__container");

const $allP = document.querySelectorAll("p");
const $allIcons = document.querySelectorAll("#icons > a");

$btn.addEventListener("click", () => {
  $footer.classList.toggle("footer__show");
  $btn.classList.toggle("btn__whoAmI__move");
  $containerText.classList.toggle("text__slaveOfTheCode__show");
  $lineSeparate.classList.toggle("line__separate__show");
  $detailsContainer.classList.toggle("details__container__show");
});
