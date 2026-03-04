// fivetennKards.js

// ====================== BARCHA MAHSULOTLAR ======================
const products = [
  { id: 1,  discount: "СКИДКА", image: "../../src/assets/img/xolodilnik1.webp", title: "Холодильник 7TECH 7REF4S261SS2", rating: "★★★★★", reviews: "17 отзывов", price: "129 000 сум", installment: "27 500 сум x 4 мес" },
  { id: 2,  discount: "Top",    image: "../../src/assets/img/xolodilnik2.webp", title: "Холодильник Samsung RT38CG6000S9WT", rating: "★★★★★", reviews: "5 отзывов",  price: "7 259 000 сум", installment: "871 100 сум x 12 мес" },
  { id: 3,  discount: "СКИДКА", image: "../../src/assets/img/telefon3.webp",    title: "Смартфон Xiaomi Redmi Note 14 Pro+ 5G 12/512GB Midnight Black", rating: "★★★★★", reviews: "2 отзывов",  price: "6 299 000 сум", installment: "755 900 сум x 12 мес" },
  { id: 4,  discount: "СКИДКА", image: "../../src/assets/img/telefon4.webp",    title: "Смартфон Xiaomi Redmi Note 14 Pro 8/256GB Aurora Purple", rating: "★★★★★", reviews: "0 отзывов",  price: "2 429 000 сум", installment: "268 700 сум x 12 мес" },
  { id: 5,  discount: "СКИДКА", image: "../../src/assets/img/telefon5.webp",    title: "Смартфон Samsung Galaxy A36 5G 8/256 Awesome White", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 6,  discount: "СКИДКА", image: "../../src/assets/img/alisa.jpeg",    title: "Умная колонка Яндекс Станция Мини 3 с часами, Turquoise", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 7,  discount: "СКИДКА", image: "../../src/assets/img/sokovijimalka.webp",    title: "Соковыжималка Ardesto JEG-1000, 1000 Вт", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 8,  discount: "СКИДКА", image: "../../src/assets/img/redmi15note.webp",    title: "Смартфон Xiaomi Redmi Note 15 Pro 4G 12/512GB, Titanium", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 9,  discount: "СКИДКА", image: "../../src/assets/img/airpuds.webp",    title: "Беспроводные наушники Belkin Soundform Rise True Wireless White", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 10, discount: "СКИДКА", image: "../../src/assets/img/pilesos.webp",    title: "Пылесос Bosch BGC21X300. Немецкий стандарт качества!", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 12, discount: "СКИДКА", image: "../../src/assets/img/redmi14note.webp",    title: "Смартфон Xiaomi Redmi Note 14 8/256GB Ocean Blue", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 13, discount: "СКИДКА", image: "../../src/assets/img/mashina.webp",    title: "Стиральная машина LG F2J6HG7W 7/4 Кг (С сушкой)", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 14, discount: "СКИДКА", image: "../../src/assets/img/iPhone.webp",    title: "Смартфон Apple iPhone 17 Air 256GB (eSIM) Space Black", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 15, discount: "СКИДКА", image: "../../src/assets/img/sinmaydigan.webp",    title: "Смартфон HONOR X9d 5G 12/256 GB, Red", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 16, discount: "СКИДКА", image: "../../src/assets/img/airpods.webp",    title: "Наушники Apple AirPods 4 ANC. Оригинал.", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 17, discount: "СКИДКА", image: "../../src/assets/img/pristavka.webp",    title: "Смарт ТВ приставка Xiaomi MI Box TV S 4K Ultra-HD 3rd generation (Google TV), MDZ-32-AA. Оригинал.", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 18, discount: "СКИДКА", image: "../../src/assets/img/vazilin.webp",    title: "ChildLife Essentials, витамин D3, со вкусом натуральных ягод, 30 мл (1 жидк. унция) (10900)", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 19, discount: "СКИДКА", image: "../../src/assets/img/ps5.webp",    title: "Игровая приставка Sony PlayStation 5 Slim 1TB", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 20, discount: "СКИДКА", image: "../../src/assets/img/vilka.webp",    title: "Сетевой переходник-адаптер MerKan KT-168", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 21, discount: "СКИДКА", image: "../../src/assets/img/Подставка.webp",    title: "Подставка для ноутбука Borofone portable BH70 , Grey", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 22, discount: "СКИДКА", image: "../../src/assets/img/HDD.png",    title: "Внешний HDD Transcend 2TB StoreJet 25M3 2,5.", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 23, discount: "СКИДКА", image: "../../src/assets/img/aktivaytw11.webp",    title: "Лицензия на операционную систему Windows 11 Pro", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 24, discount: "СКИДКА", image: "../../src/assets/img/ducon.webp",    title: "Фен-Стайлер Dyson Airwrap i.d. Long HS08 Straight+Wavy Vinca Blue", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 25, discount: "СКИДКА", image: "../../src/assets/img/telefon5.webp",    title: "Смартфон Samsung Galaxy A36 5G 8/256 Awesome White", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 26, discount: "СКИДКА", image: "../../src/assets/img/poverbank.webp",    title: "Беспроводное зарядное устройство Pitaka Power Bank Qi2, Sunset", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 27, discount: "СКИДКА", image: "../../src/assets/img/telefon5.webp",    title: "Смартфон Samsung Galaxy A36 5G 8/256 Awesome White", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 28, discount: "СКИДКА", image: "../../src/assets/img/massaj.webp",    title: "Массажер для головы MDHL MD-877", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 29, discount: "СКИДКА", image: "../../src/assets/img/shotka.webp",    title: "Электрическая зубная щетка Enchen Aurora T+ Pink", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 30, discount: "СКИДКА", image: "../../src/assets/img/soat.webp",    title: "Умные часы HUAWEI Watch Fit 4 pro, Black", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },
  { id: 31, discount: "СКИДКА", image: "../../src/assets/img/xuynyashka.webp",    title: "Фитнес-браслет WHOOP 5.0 Life (с годовой подпиской)", rating: "★★★★★", reviews: "7 отзывов",  price: "3 309 000 сум", installment: "255 500 сум x 12 мес" },

  //  СКИДКИ BO'LIMI (id 51-55)
  { id: 51, discount: "СКИДКА -30%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 1", rating: "★★★★★", reviews: "45 отзывов", price: "4 999 000 сум", installment: "833 200 сум x 6 мес" },
  { id: 52, discount: "СКИДКА -25%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 2", rating: "★★★★★", reviews: "32 отзывов", price: "3 499 000 сум", installment: "583 200 сум x 6 мес" },
  { id: 53, discount: "СКИДКА -20%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 3", rating: "★★★★★", reviews: "28 отзывов", price: "6 999 000 сум", installment: "1 166 500 сум x 6 мес" },
  { id: 54, discount: "СКИДКА -15%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 4", rating: "★★★★★", reviews: "19 отзывов", price: "5 499 000 сум", installment: "916 500 сум x 6 мес" },
  { id: 55, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },
  { id: 56, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },
  { id: 57, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },
  { id: 58, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },
  { id: 59, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },
  { id: 60, discount: "СКИДКА -10%", image: "../../src/assets/img/telefon5.webp", title: "Yangi mahsulot 5", rating: "★★★★★", reviews: "56 отзывов", price: "1 999 000 сум", installment: "333 200 сум x 6 мес" },

  //  KITOBLAR (id 101-112) — taqqoslash/savat/yurak da ham topilishi uchun
  { id: 101, discount: "-26%", image: "../../src/assets/img/kitob.webp", title: "Граф Монте-Кристо",         rating: "★★★★★", reviews: "128 отзывов", price: "149 000 сум", installment: "24 900 сум x 6 мес" },
  { id: 102, discount: "-17%", image: "../../src/assets/img/kitobweb.webp", title: "Asaxiy Books йил бестселлерлари ", rating: "★★★★★", reviews: "95 отзывов",  price: "99 000 сум",  installment: "16 500 сум x 6 мес" },
  { id: 103, discount: "-20%", image: "../../src/assets/img/oruell.webp", title: "Жорж Оруэлл: 1984",        rating: "★★★★☆", reviews: "74 отзывов",  price: "89 000 сум",  installment: "14 900 сум x 6 мес" },
  { id: 104, discount: "-15%", image: "../../src/assets/img/bezonomika.webp", title: "Браян Дюмейн: Безономика.", rating: "★★★★★", reviews: "203 отзывов", price: "119 000 сум", installment: "19 900 сум x 6 мес" },
  { id: 105, discount: "-30%", image: "../../src/assets/img/kitob.webp", title: "Думай и богатей",           rating: "★★★★★", reviews: "156 отзывов", price: "79 000 сум",  installment: "13 200 сум x 6 мес" },
  { id: 106, discount: "-10%", image: "../../src/assets/img/kitob.webp", title: "1984",                      rating: "★★★★★", reviews: "88 отзывов",  price: "109 000 сум", installment: "18 200 сум x 6 мес" },
  { id: 107, discount: "-22%", image: "../../src/assets/img/kitob.webp", title: "Гарри Поттер и камень",     rating: "★★★★★",  reviews: "312 отзывов", price: "129 000 сум", installment: "21 500 сум x 6 мес" },
  { id: 108, discount: "-18%", image: "../../src/assets/img/kitob.webp", title: "Алхимик",                  rating: "★★★★☆", reviews: "67 отзывов",  price: "85 000 сум",  installment: "14 200 сум x 6 мес" },
  { id: 109, discount: "-25%", image: "../../src/assets/img/kitob.webp", title: "Война и мир",              rating: "★★★★★", reviews: "44 отзывов",  price: "175 000 сум", installment: "29 200 сум x 6 мес" },
  { id: 110, discount: "-12%", image: "../../src/assets/img/kitob.webp", title: "Преступление и наказание", rating: "★★★★★", reviews: "91 отзывов",  price: "95 000 сум",  installment: "15 800 сум x 6 мес" },
  { id: 111, discount: "-20%", image: "../../src/assets/img/kitob.webp", title: "Сила привычки",            rating: "★★★★☆", reviews: "52 отзывов",  price: "99 000 сум",  installment: "16 500 сум x 6 мес" },
  { id: 112, discount: "-14%", image: "../../src/assets/img/kitob.webp", title: "Искусство войны",          rating: "★★★★★", reviews: "38 отзывов",  price: "69 000 сум",  installment: "11 500 сум x 6 мес" },
  { id: 113, discount: "-14%", image: "../../src/assets/img/kitob.webp", title: "Искусство войны",          rating: "★★★★★", reviews: "38 отзывов",  price: "69 000 сум",  installment: "11 500 сум x 6 мес" },
  { id: 114, discount: "-14%", image: "../../src/assets/img/kitob.webp", title: "Искусство войны",          rating: "★★★★★", reviews: "38 отзывов",  price: "69 000 сум",  installment: "11 500 сум x 6 мес" },
  { id: 115, discount: "-14%", image: "../../src/assets/img/kitob.webp", title: "Искусство войны",          rating: "★★★★★", reviews: "38 отзывов",  price: "69 000 сум",  installment: "11 500 сум x 6 мес" },
];

//  discountProducts — faqat СКИДКИ bo'limi uchun
const discountProducts = products.filter(p => p.id >= 51 && p.id <= 60);
const books = products.filter(p =>p.id >= 101 && p.id <=115);

// ====================== SAHIFAGA O'TISH ======================
function goToPage(page) {
  window.location.href = page;
}

// ====================== KARTA HTML (bir xil ko'rinish) ======================
function createCardHTML(item) {
  return `
    <div class="discount-badge">${item.discount}</div>
    <div class="icons">
      <button class="heart-btn" data-id="${item.id}"><i class="ri-heart-3-line"></i></button>
      <button class="compare-btn" data-id="${item.id}"><i class="ri-scales-line"></i></button>
    </div>
    <img src="${item.image}" alt="${item.title}"
         onclick="goToPage('../../src/html/obzor.html?id=${item.id}')"
         style="cursor:pointer;">
    <div class="name"
         onclick="goToPage('../../src/html/obzor.html?id=${item.id}')"
         style="cursor:pointer;">${item.title}</div>
    <div class="rating">${item.rating}</div>
    <div class="reviews">${item.reviews}</div>
    <div class="price">${item.price}</div>
    <div class="installment">${item.installment}</div>
    <div class="buttons">
      <button class="buy-btn"><span class="btn-text">Sotib olish</span></button>
      <button class="cart-btn"><i class="ri-shopping-cart-2-line"></i></button>
    </div>
  `;
}
// ====================== ASOSIY GRID ======================
function renderCards() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  products.filter(p => p.id <= 31).forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = createCardHTML(item);
    grid.appendChild(card);
  });

  addListeners();
}

// ====================== СКИДКИ BO'LIMI ======================
function renderDiscountCards() {
  const grid2 = document.getElementById("product-grid2");
  if (!grid2) return;
  grid2.innerHTML = "";

  discountProducts.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = createCardHTML(item);
    grid2.appendChild(card);
  });

  addListeners();
  restoreIconStates();
  updateCounts();
}

// ====================== TUGMA LISTENERLAR ======================
function addListeners() {
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      const id = parseInt(btn.dataset.id);
      addToStorage('favorites', id, btn);
    });
  });

  document.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      const id = parseInt(btn.dataset.id);
      addToStorage('compare', id, btn);
    });
  });

  document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    const id = parseInt(btn.closest('.product-card').querySelector('.heart-btn').dataset.id);
    const icon = btn.querySelector('i');
    
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (items.includes(id)) {
      // Savatdan olib tashlash — cart iconga qaytish
      icon.classList.replace('ri-close-large-line', 'ri-shopping-cart-2-line');
      icon.style.color = '#fff';
    } else {
      // Savatga qo'shish — X iconga o'zgarish
      icon.classList.replace('ri-shopping-cart-2-line', 'ri-close-large-line');
      icon.style.color = '#fff';
    }
    
    addToStorage('cart', id);
  });
});
}

// ====================== LOCALSTORAGE ======================
function addToStorage(key, id, btn = null) {
  let items = JSON.parse(localStorage.getItem(key)) || [];

  if (items.includes(id)) {
    items = items.filter(i => i !== id);
  } else {
    items.push(id);
  }

  localStorage.setItem(key, JSON.stringify(items));
  updateCounts();
  restoreIconStates();
}

// ====================== SONLARNI YANGILASH ======================
function updateCounts() {
  const fav  = JSON.parse(localStorage.getItem('favorites')) || [];
  const comp = JSON.parse(localStorage.getItem('compare'))   || [];
  const cart = JSON.parse(localStorage.getItem('cart'))      || [];

  const yurakEl      = document.getElementById('yurak');
  const taqqoslashEl = document.getElementById('taqqoslash');
  const shopEl       = document.getElementById('shop');

  if (yurakEl)      yurakEl.textContent     = fav.length;
  if (taqqoslashEl) taqqoslashEl.textContent = comp.length;
  if (shopEl)       shopEl.textContent       = cart.length;
}

// ====================== IKONLARNI TIKLASH ======================
function restoreIconStates() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const compares  = JSON.parse(localStorage.getItem('compare'))   || [];

  document.querySelectorAll('.heart-btn').forEach(btn => {
    const id   = parseInt(btn.dataset.id);
    const icon = btn.querySelector('i');
    if (favorites.includes(id)) {
      icon.classList.replace('ri-heart-3-line', 'ri-heart-3-fill');
      icon.style.color = '#ef4444';
    } else {
      icon.classList.replace('ri-heart-3-fill', 'ri-heart-3-line');
      icon.style.color = '';
    }
  });

  document.querySelectorAll('.compare-btn').forEach(btn => {
    const id   = parseInt(btn.dataset.id);
    const icon = btn.querySelector('i');
    if (compares.includes(id)) {
      icon.classList.replace('ri-scales-line', 'ri-scales-fill');
      icon.style.color = '#1a56db';
    } else {
      icon.classList.replace('ri-scales-fill', 'ri-scales-line');
      icon.style.color = '';
    }
  });

  // cart ikonlarini tiklash
const carts = JSON.parse(localStorage.getItem('cart')) || [];
document.querySelectorAll('.cart-btn').forEach(btn => {
  const id = parseInt(btn.closest('.product-card').querySelector('.heart-btn').dataset.id);
  const icon = btn.querySelector('i');
  if (carts.includes(id)) {
    icon.classList.replace('ri-shopping-cart-2-line', 'ri-close-large-line');
  } else {
    icon.classList.replace('ri-close-large-line', 'ri-shopping-cart-2-line');
  }
});
}

// ====================== SAHIFA YUKLANGANDA ======================
window.addEventListener('load', () => {
  renderCards();
  renderDiscountCards();
  updateCounts();
  restoreIconStates();
});

