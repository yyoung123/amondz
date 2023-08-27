const mainSlide = new Swiper(".main_swiper .swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
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
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  loop: false,
  pagination: {
    el: ".spdeal_area .swiper-pagination",
  },
});
const productSlide = new Swiper(".swiper-container.swiper-grid", {
  direction: "horizontal",
  slidesPerView: 2,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  spaceBetween: 15,
  grid: {
    rows: 2,
  },
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  loop: false,
  pagination: {
    el: ".swiper-grid .swiper-pagination",
    clickable: true,
  },
});
const saleBrandSlide = new Swiper(".sale_brand_area .swiper-container", {
  direction: "horizontal",
  slidesPerView: 1.1,
  spaceBetween: 10,
  loop: false,
});
// 해야할 것 ㅜ.ㅜ.
// 1.가격 콤마구분
// 2. footer nav 코드짜기
// 3. json 코드짜기
const likeBtn = $(".btn_like svg");
$.each(likeBtn, function (index, item) {
  $(this).click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("like")) {
      $(this).removeClass("like");
      likeBtn.attr("aria-label", "좋아요 활성화");
    } else {
      $(this).addClass("like");
      likeBtn.attr("aria-label", "좋아요 비활성화");
    }
  });
});

$(".btn_like").click(function (e) {
  e.preventDefault();
  sort = $(this).data("sort");
  hi(sort);
});
// function itemList(num) {
fetch("./data/data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.items;
    let html = "";
    data.forEach((item, index) => {
      // console.log(item);
      html += `<a href="">
      <div class="product_box">
        <figure>
          <img src="./img/main/PSI_1.jpeg" alt="" class="product_img">
        </figure>
        <div class="product_info">
          <div class="brand"><strong class="_title"> ${item.brand}</strong></div>
        <div class="brand product_name">
          <p class="_title">${item.name}</p>
        </div>
        <div class="brand product_price">
          <p class="">
            <span class="discount">${saleCalc(item.price.ori, item.price.sale)}</span>
            <span class="final_price">${item.price.sale}</span>
          </p>
          <div class="delivery">
            <svg role="img" aria-label="오늘 배송 상품" width="48" height="12" fill="#6200f0" viewBox="0 0 48 12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute;"><defs><path id="gqczz64tsa" d="M0 0h22.2v12H0z"></path><path id="unexvqbykc" d="M0 0h4.848v1.193H0z"></path></defs><g fill-rule="evenodd"><g><mask id="d8fnmogxyb" fill="#fff"><use xlink:href="#gqczz64tsa"></use></mask><path d="M14.915 11.962 6.548 12C2.36 12.02-.668 8.828.128 5.231.78 2.271 3.836.054 7.284.038L15.652 0c4.189-.02 7.216 3.172 6.42 6.769-.654 2.96-3.709 5.177-7.157 5.193" mask="url(#d8fnmogxyb)"></path></g><g fill="#FFF"><path d="M6.511 5.405c-.154-.193-.207-.444-.15-.726.138-.695.83-1.144 1.764-1.144.533 0 .947.15 1.166.423.157.195.21.448.153.732-.138.69-.83 1.136-1.763 1.136-.537 0-.952-.15-1.17-.42zm1.396 2.527H7.86l.01-.047.204-1.032.007-.032.031-.004c1.37-.198 2.399-1.044 2.62-2.155.105-.526.001-1.002-.299-1.376-.41-.511-1.151-.792-2.09-.792-1.666 0-3.008.896-3.264 2.18-.218 1.096.46 1.938 1.73 2.143l.039.007-.008.04-.205 1.032-.008.036H3.886l-.194.974h6.74l.194-.974H7.907zM12.997 8.443l.008-.036h3.974l.398-2.006h-5.18l-.18.906h3.94l-.01.048-.052.262-.007.036h-3.94l-.406 2.04h5.365l.189-.949H12.937l.01-.047zM17.81 4.567l.185-.931H14.07l.01-.048.254-1.28h-1.24l-.45 2.259zM18.27 5.962l.192-.965h-6.74l-.193.965z"></path></g><path d="m26.8 1.14-.21 1.054h3.268l.21-1.054zM24.337 5.21c1.499 0 2.79-.375 3.454-1.004l.048-.046.034.053c.38.596 1.567.997 2.956.997h.198l.724-1.054h-.088c-1.183 0-1.978-.17-2.364-.506l-.11-.096h2.347l.208-1.043H24.61l-.208 1.043h2.344l-.173.1c-.506.297-1.351.448-2.512.448h-.144l.285 1.108h.135zM26.445 6.658h.062l-.013.062-.067.34-.01.047h-2.592l-.195.977H28.793l-.012.062-.066.33-.01.046h-5.162l-.457 2.294H30.1l.195-.977h-5.403l.013-.062.059-.296.01-.047h5.173l.463-2.327h-2.603l.012-.062.068-.34.01-.047H31.724l.223-1.12H23.19l-.223 1.12zM40.804 3.158h-.062l.012-.062.395-1.978h-1.601L38.575 6h1.6l.302-1.51.009-.048h1.22l.256-1.284zM36.305 3.945l-.133.669-.01.047h-1.59l.012-.062.134-.67.009-.046h1.59l-.012.062zm.448-2.246-.19.951-.01.047H34.964l.012-.061.187-.937h-1.568l-.833 4.18h4.76l.832-4.18h-1.6zM34.614 9.152l.009-.048H39.557l.52-2.611h-6.545l-.23 1.152h4.945l-.012.062-.066.33-.01.047h-4.944l-.525 2.633h13.384a.584.584 0 0 0 .571-.472.586.586 0 0 0-.571-.703H34.536l.012-.061.066-.33z"></path><path d="M45.543 7.73h-3.635a.562.562 0 0 1-.572-.596.643.643 0 0 1 .638-.597h3.636c.334 0 .59.267.572.597a.643.643 0 0 1-.639.596"></path><g transform="translate(43.152 3.602)"><mask id="x459ofzysd" fill="#fff"><use xlink:href="#unexvqbykc"></use></mask><path d="M4.209 1.193H.573A.562.562 0 0 1 .001.596.643.643 0 0 1 .64 0h3.635c.335 0 .59.267.572.596a.643.643 0 0 1-.638.597" mask="url(#x459ofzysd)"></path></g></g></svg>
          </div>
        </div>
        <button class="btn_like">
          <svg role="img" aria-label="좋아요 비활성화" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.824 4.005a5.068 5.068 0 0 0-3.753 1.937L12 6.036l-.07-.094A5.066 5.066 0 0 0 7.94 4C5.097 4 2.8 6.386 2.8 9.32a5.42 5.42 0 0 0 1.09 3.275l.124.158.382.449c1.175 1.338 3.37 3.338 6.587 6.004.663.55 1.626.54 2.279-.022l1.002-.869c3.007-2.626 4.895-4.449 5.691-5.505l.154-.215c.16-.208.312-.444.447-.695l.128-.256a.802.802 0 0 0 .059-.133c.294-.65.457-1.41.457-2.192C21.2 6.386 18.903 4 16.06 4l-.236.005zM16.06 5c2.282 0 4.14 1.93 4.14 4.32 0 .549-.098 1.082-.286 1.58l-.119.287-.006.013a4.521 4.521 0 0 1-.355.623l-.136.188c-.68 1.004-2.804 3.055-6.35 6.123l-.34.293a.765.765 0 0 1-.987.009l-1.058-.884c-2.714-2.287-4.564-4.01-5.541-5.155l-.118-.14A4.42 4.42 0 0 1 3.8 9.32C3.8 6.93 5.658 5 7.94 5c1.526 0 2.897.845 3.619 2.196l.441.826.441-.826C13.163 5.845 14.534 5 16.06 5z" fill="#000000" fill-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
    </a> `;
    });
    $(".contents_inner .product_area").html(html); //화면에 출력
  });
// }
// .catch((error) => {
//   console.log("에러에러");
// });
function saleCalc(ori, sale) {
  return ((ori - sale) / ori) * 100;
}

// 천단위 끊기
function number(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}