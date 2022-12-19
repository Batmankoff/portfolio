$(function () {
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({
      scrollTop: top
    }, 1000);
  });

  $(".open-btn, .menu__btn-close, .menu a").on("click", function () {
    $(".header").toggleClass("header--active");
  });

    $(".star").rateYo({
    starWidth: "26px",
    normalFill: "#E5E5E5",
    ratedFill: "#000000",
    readOnly: true,
    spacing: "8px",
    starSvg: '<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0853 1.2131C10.3851 0.292819 11.687 0.29282 11.9869 1.2131L13.738 6.58749C13.8721 6.99912 14.2559 7.2777 14.6888 7.2777H20.3495C21.3189 7.2777 21.7213 8.51873 20.9363 9.08749L16.3614 12.4021C16.0099 12.6568 15.8629 13.1091 15.9973 13.5217L17.7459 18.8884C18.0459 19.8092 16.9926 20.5762 16.2084 20.0079L11.6228 16.6856C11.2728 16.432 10.7994 16.432 10.4494 16.6856L5.86382 20.0079C5.07956 20.5762 4.02627 19.8092 4.3263 18.8884L6.07487 13.5217C6.20932 13.1091 6.06224 12.6568 5.71078 12.4021L1.13591 9.08749C0.350903 8.51873 0.753233 7.2777 1.72263 7.2777H7.38338C7.81631 7.2777 8.20007 6.99912 8.33419 6.58749L10.0853 1.2131Z" /></svg>'
  });



});