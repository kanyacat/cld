window.addEventListener("DOMContentLoaded", function () {
  this.document
    .querySelector("#nav_toggle")
    .addEventListener("click", function () {
      document.querySelector(".header__burger").classList.toggle("active");
      $(this).toggleClass("active"); //для черточек/крестика
    });
});
