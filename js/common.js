$(function () {
  const depth01 = $(".footer_title span");

  $(".btn_menu").on("click", function () {
    $(".modal_menu").addClass("act");
    $("body").addClass("overflow");
    $(".modal_btn_close").on("click", function () {
      $(".modal_menu").removeClass("act");
      $("body").removeClass("overflow");
    });
  });
  $(".btn_delete").on("click", function (e) {
    e.preventDefault();
    $(".top_event").css("display", "none");
  });
  depth01.on("click", function (e) {
    const depth02 = $(this).next();
    depth02.slideToggle();
  });
});

// const btnMenu = $(".btn_menu");
// const btnTop = $(".btn_top");
// topButton();
// function toggleMenu() {
//   $(this).find("ul").toggleClass("none");
// }
// function topButton() {
//   $(window).scroll(function () {
//     let h = $(this).scrollTop();
//     if (h > 300) {
//       $(".btn_top").addClass("show");
//     } else {
//       $(".btn_top").removeClass("show");
//     }
//   });
//   btnTop.click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 400);
//     return false;
//   });
// }
// btnClose.on("click", sitemapClose);
// $(document).keydown(function (e) {
//   if (e.keyCode == 27 || e.which == 27) {
//     sitemapClose();
//   }
// });
