document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".how-we-work__nav-link")
    .forEach(function (tabsLink) {
      tabsLink.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".how-we-work__nav-link")
          .forEach(function (tabLink) {
            tabLink.classList.remove("how-we-work__nav-link-active");
          });

        document
          .querySelector(`[data-path="${path}"]`)
          .classList.add("how-we-work__nav-link-active");

        document
          .querySelectorAll(".how-we-work__info")
          .forEach(function (tabContent) {
            tabContent.classList.remove("how-we-work-info-active");
          });

        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("how-we-work-info-active");
      });
    });
});
