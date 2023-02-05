window.addEventListener("DOMContentLoaded", function () {
  this.document
    .querySelector("#nav_toggle")
    .addEventListener("click", function () {
      document.querySelector(".header__burger").classList.toggle("active");
      document.querySelector(".burger-nav").classList.toggle("active");

      // setTimeout(function () {
      //   document.querySelector(".header__burger").classList.toggle("transform");
      // }, 10);

      $(this).toggleClass("active"); //для черточек/крестика
    });
});
