$(document).ready(function () {
  var sliderOne = new Swiper(".part-content__slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    autoHover: true,
    // navigation: {
    //   nextEl: ".portfolio-content__button--next",
    //   prevEl: ".portfolio-content__button--prev",
    // },
    // autoplay: {
    //   delay: 7000,
    // },
    // on: {
    //   init() {
    //     this.el.addEventListener("mouseenter", () => {
    //       this.autoplay.stop();
    //     });
    //     this.el.addEventListener("mouseleave", () => {
    //       this.autoplay.start();
    //     });
    //   },
    // },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //   },
    //   576: {
    //     slidesPerView: 1,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //   },
    //   992: {
    //     slidesPerView: 2,
    //   },
    //   1090: {
    //     slidesPerView: 3,
    //   },
    // },
  });
  // $(".social__btn").on("click", function () {
  //   $(".overlay").show();
  // });
  // $(".popup__close").on("click", function () {
  //   $(".overlay").hide();
  // });
  // $('[data-toggle="tooltip"]').tooltip();
  // $(".navbar__burger").click(function (event) {
  //   $(".navbar__burger,.navbar__list").toggleClass("open");
  //   $("body").toggleClass("lock");
  // });
  // $(".form").each(function () {
  //   $(this).validate({
  //     errorClass: "invalid",
  //     messages: {
  //       email: {
  //         required: "Please enter your email",
  //         email: "Your email address format of name@domain.com",
  //       },
  //     },
  //   });
  // });
  // var menuButton = $(".menu-button");
  // menuButton.on("click", function () {
  //   $(".navbar-menu__item").toggleClass("navbar-menu__item--mobile");
  //   $(".navbar-menu").toggleClass("navbar-menu--visible");
  //   $("body").toggleClass("lock");
  // });
});
