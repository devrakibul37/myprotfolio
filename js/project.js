

document.addEventListener('DOMContentLoaded', function () {
  const portfolioSlider = new Swiper('.portfolio-slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
});