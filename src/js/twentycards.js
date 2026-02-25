// ====================== BREND LAR SWIPERI ======================
var brandsSwiper = new Swiper(".brandsSwiper", {
  slidesPerView: "auto",      // avtomatik o'lcham
  spaceBetween: 30,
  loop: true,                 // doimiy aylanadi
  autoplay: {
    delay: 1500,              // 1.5 sekundda bir suriladi
    disableOnInteraction: false,
  },
  speed: 1000,                // surilish tezligi
  direction: 'horizontal',
  breakpoints: {
    320: { slidesPerView: 3 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 6 }
  }
});



// Accordion funksiyasi (eng ishonchli variant)
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    
    // Barcha accordionlarni yopish
    document.querySelectorAll('.accordion-item').forEach(acc => {
      if (acc !== item) acc.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});