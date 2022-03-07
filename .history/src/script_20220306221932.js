$(document).ready(function () {
  $(".equipment-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left"  src="images/backward.svg" alt="arrow-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="images/upward.svg" alt="arrow-right">',
    responsive: [
      {
        breakpoint: 738,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 508,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  });
});
