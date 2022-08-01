const $slider = document.querySelector(".slider");

new Glider($slider, {
  slidesToShow: 1,
  draggable: true,
  dots: ".slider-dots",
});
