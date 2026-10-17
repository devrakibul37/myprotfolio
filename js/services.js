
document.addEventListener("DOMContentLoaded", function () {
  const servicesElement = document.querySelector(".services-swiper");

  if (!servicesElement || typeof Swiper === "undefined") return;

  const servicesSwiper = new Swiper(servicesElement, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 18,

    // Cards will stop at the end — no infinite loop
    loop: false,
    rewind: false,

    speed: 650,
    watchOverflow: true,
    grabCursor: true,

    navigation: {
      prevEl: ".services-prev",
      nextEl: ".services-next",
    },

    pagination: {
      el: ".services-dots",
      clickable: true,
      dynamicBullets: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },

    a11y: {
      enabled: true,
    },
  });
});




