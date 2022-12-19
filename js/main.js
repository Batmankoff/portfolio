$(function () {
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({ scrollTop: top }, 1500);
  });
  // $(".menu__btn ,.menu__btn-close, .menu a").on("click", function () {
  //   $(".header").toggleClass("header--active");
  // });
});
