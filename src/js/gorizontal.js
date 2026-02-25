const superSwiper = new Swiper('.superSwiper', {
  loop: true,
  slidesPerView: 5.5,
  spaceBetween: 16,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 2.2 },
    640: { slidesPerView: 3.2 },
    1024: { slidesPerView: 4.5 },
    1280: { slidesPerView: 5.5 }
  }
});