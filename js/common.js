$(function () {
  const mainSlide = new Swiper(".main_swiper .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".main_swiper .swiper-pagination",
      type: "fraction",
    },
  });
  const spdealSlide = new Swiper(".spdeal_area .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: false,
  });
  const productSlide = new Swiper(".recommend_area .swiper-container", {
    direction: "horizontal",
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerGroup: 4,
    spaceBetween: 15,
    grid: {
      fill: "row",
      rows: 2,
    },
    loop: false,
    pagination: {
      el: ".recommend.swiper-pagination",
      clickable: true,
    },
  });
  const saleBrandSlide = new Swiper(".sale_brand_area .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: false,
  });
  const widgetSlide = new Swiper(".widget_wrapper .swiper-container", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: false,
  });
  const eventSlide = new Swiper(".event_area .swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    pagination: {
      el: ".event.swiper-pagination",
    },
  });
  var lastScroll = 0;
  $(window).scroll(function (e) {
    const st = $(this).scrollTop();
    if (st > lastScroll) {
      $(".mobile_nav").addClass("none");
    } else {
      $(".mobile_nav").removeClass("none");
    }
    lastScroll = st;
  });
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
