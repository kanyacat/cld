$(function () {
  /* Smooth (плавный) scroll */

  //при клике с атрибутом дата скролл
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top; //получаем значение элемента от верха страницы

    //сначала у всех убираем потом делаем  активными
    $(".nav__link").removeClass("active"); //у всех ссылок в нав
    $(".nav__link").removeClass("active");
    $this.addClass("active");

    //плавный скролл
    $("html, body").animate(
      {
        scrollTop: blockOffset - 130,
      },
      600 //время скролла в мс
    );
  });
});
