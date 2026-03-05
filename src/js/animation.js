// ====================== SAVATGA UCHISH ANIMATSIYASI ======================

function flyToCart(productCard) {
  // 1. Karta ichidagi rasmni topish
  const img = productCard.querySelector('img');
  const cartIcon = document.querySelector('.ri-shopping-cart-2-line, #shop')?.closest('div');

  if (!img || !cartIcon) return;

  // 2. Rasmning ekrandagi joyi
  const imgRect  = img.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  // 3. Uchuvchi rasm yaratish (clone)
  const flyImg = document.createElement('img');
  flyImg.src = img.src;
  flyImg.style.cssText = `
    position: fixed;
    z-index: 99999;
    border-radius: 10px;
    pointer-events: none;
    width:  ${imgRect.width}px;
    height: ${imgRect.height}px;
    top:    ${imgRect.top}px;
    left:   ${imgRect.left}px;
    transition: none;
    object-fit: contain;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  `;
  document.body.appendChild(flyImg);

  // 4. Bir tick kutish (reflow uchun)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flyImg.style.transition = 'all 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      flyImg.style.width  = '30px';
      flyImg.style.height = '30px';
      flyImg.style.top    = cartRect.top  + cartRect.height / 2 - 15 + 'px';
      flyImg.style.left   = cartRect.left + cartRect.width  / 2 - 15 + 'px';
      flyImg.style.opacity = '0.7';
      flyImg.style.borderRadius = '50%';
    });
  });

  // 5. Animatsiya tugaganda: rasmni o'chirish + savat silkinishi
  setTimeout(() => {
    flyImg.remove();
    shakeCart();
  }, 750);
}

// Savat ikonini silkitish
function shakeCart() {
  const shopEl = document.getElementById('shop');
  if (!shopEl) return;

  const cartDiv = shopEl.closest('div');
  if (!cartDiv) return;

  cartDiv.style.transition = 'transform 0.1s';
  const shakes = [
    { x: '-6px', y: '-4px' },
    { x: '6px',  y: '4px'  },
    { x: '-4px', y: '-2px' },
    { x: '4px',  y: '2px'  },
    { x: '0px',  y: '0px'  },
  ];

  shakes.forEach((s, i) => {
    setTimeout(() => {
      cartDiv.style.transform = `translate(${s.x}, ${s.y})`;
    }, i * 80);
  });

  // Son o'zgarishi uchun pulse
  setTimeout(() => {
    if (shopEl) {
      shopEl.style.transition = 'transform 0.2s, background 0.2s';
      shopEl.style.transform = 'scale(1.5)';
      shopEl.style.background = '#fe7300';
      shopEl.style.borderRadius = '50%';
      shopEl.style.padding = '2px 5px';
      shopEl.style.color = '#fff';
      setTimeout(() => {
        shopEl.style.transform = 'scale(1)';
        shopEl.style.background = '';
        shopEl.style.padding = '';
      }, 300);
    }
  }, 400);
}

// ====================== CART BTN LISTENER (yangilangan) ======================
// Bu funksiyani addListeners() ichidagi cart-btn qismini almashtiradi

function addCartListeners() {
  document.querySelectorAll('.cart-btn').forEach(btn => {
    // Oldingi listenerlarni tozalash
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', (e) => {
      e.stopImmediatePropagation();

      const card = newBtn.closest('.product-card');
      const id   = parseInt(card.querySelector('.heart-btn').dataset.id);
      const icon = newBtn.querySelector('i');
      const items = JSON.parse(localStorage.getItem('cart')) || [];

      if (items.includes(id)) {
        // Savatdan olib tashlash
        icon.classList.replace('ri-close-large-line', 'ri-shopping-cart-2-line');
        icon.style.color = '#fff';
      } else {
        // ✅ Savatga qo'shish — animatsiya!
        flyToCart(card);
        icon.classList.replace('ri-shopping-cart-2-line', 'ri-close-large-line');
        icon.style.color = '#fff';
      }

      addToStorage('cart', id);
    });
  });
}

// Sahifa yuklanganda ishga tushirish
window.addEventListener('load', () => {
  // Kartalar render bo'lganidan keyin chaqiriladi
  setTimeout(() => {
    addCartListeners();
    restoreCartIcons();
  }, 100);
});

// Cart ikonlarini tiklash
function restoreCartIcons() {
  const carts = JSON.parse(localStorage.getItem('cart')) || [];
  document.querySelectorAll('.cart-btn').forEach(btn => {
    const card = btn.closest('.product-card');
    if (!card) return;
    const id   = parseInt(card.querySelector('.heart-btn')?.dataset.id);
    const icon = btn.querySelector('i');
    if (!icon) return;

    if (carts.includes(id)) {
      icon.classList.replace('ri-shopping-cart-2-line', 'ri-close-large-line');
    } else {
      icon.classList.replace('ri-close-large-line', 'ri-shopping-cart-2-line');
    }
  });
}






// ====================== CATEGORY MODAL ======================

function createCategoryModal() {
  const modal = document.createElement('div');
  modal.id = 'categoryModal';
  modal.innerHTML = `
    <div class="cat-modal__overlay" id="catOverlay"></div>
    <div class="cat-modal__box">

      <button class="cat-modal__close" id="catClose">
        <i class="ri-close-large-line"></i>
      </button>

      <!-- CHAP -->
      <div class="cat-modal__left">
        <div class="cat-modal__item active" data-cat="kitoblar">
          <i class="ri-book-2-line"></i><span>Книги</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="telefon">
          <i class="ri-smartphone-line"></i><span>Телефоны и гаджеты</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="kompyuter">
          <i class="ri-computer-line"></i><span>Компьютерная техника</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="maishiy">
          <i class="ri-fridge-line"></i><span>Бытовая техника</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="televizor">
          <i class="ri-tv-2-line"></i><span>Телевизоры, видео и аудио</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="oyin">
          <i class="ri-gift-line"></i><span>Игрушки, подарки и аксессуары</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="bola">
          <i class="ri-riding-line"></i><span>Детские товары</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="iqlim">
          <i class="ri-wind-line"></i><span>Климатическая техника</span><i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="cat-modal__item" data-cat="gozellik">
          <i class="ri-heart-pulse-line"></i><span>Красота и здоровье</span><i class="ri-arrow-right-s-line"></i>
        </div>
      </div>

      <!-- O'NG -->
      <div class="cat-modal__right">

        <div class="cat-modal__panel active" id="cat-kitoblar">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Asaxiy Books китоблари</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Художественная литература</div>
              <a class="cat-modal__link">Мировая литература</a>
              <a class="cat-modal__link">Узбекская литература</a>
              <div class="cat-modal__col-title" style="margin-top:20px">Психология и саморазвитие</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Книги про бизнес</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Детская литература</div>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Религиозная литература</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Книги на русском</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Учебная литература</div>
              <a class="cat-modal__link">Книги про IT</a>
              <a class="cat-modal__link">Изучение иностранных языков</a>
              <a class="cat-modal__link">Книги для абитуриентов</a>
              <a class="cat-modal__link">Словари и разговорники</a>
              <div class="cat-modal__col-title" style="margin-top:20px">ТОР-100 книг бестселлеров</div>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Сборники бестселлеров</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Детективы и фантастика</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Политика и экономика</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Биография</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Книжные подарочные наборы</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Турецкая литература</div>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">История</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Книги на английском</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Asaxiy Pro</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Книги для коллекционеров</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Предзаказ</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Премьера</div>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-telefon">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Смартфоны</div>
              <a class="cat-modal__link">Samsung</a>
              <a class="cat-modal__link">Apple iPhone</a>
              <a class="cat-modal__link">Xiaomi</a>
              <a class="cat-modal__link">Realme</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Аксессуары</div>
              <a class="cat-modal__link">Чехлы</a>
              <a class="cat-modal__link">Наушники</a>
              <a class="cat-modal__link">Зарядные устройства</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Планшеты</div>
              <a class="cat-modal__link">iPad</a>
              <a class="cat-modal__link">Samsung Tab</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Умные часы</div>
              <a class="cat-modal__link">Apple Watch</a>
              <a class="cat-modal__link">Samsung Watch</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-kompyuter">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Ноутбуки</div>
              <a class="cat-modal__link">Apple MacBook</a>
              <a class="cat-modal__link">ASUS</a>
              <a class="cat-modal__link">HP</a>
              <a class="cat-modal__link">Lenovo</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Комплектующие</div>
              <a class="cat-modal__link">Видеокарты</a>
              <a class="cat-modal__link">Процессоры</a>
              <a class="cat-modal__link">Оперативная память</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Мониторы</div>
              <a class="cat-modal__link">Samsung</a>
              <a class="cat-modal__link">LG</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Периферия</div>
              <a class="cat-modal__link">Клавиатуры</a>
              <a class="cat-modal__link">Мыши</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-maishiy">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Холодильники</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Стиральные машины</div>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Кухонная техника</div>
              <a class="cat-modal__link">Микроволновые печи</a>
              <a class="cat-modal__link">Мультиварки</a>
              <a class="cat-modal__link">Кофемашины</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Пылесосы</div>
              <a class="cat-modal__link">Робот-пылесосы</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-televizor">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Телевизоры</div>
              <a class="cat-modal__link">Samsung</a>
              <a class="cat-modal__link">LG</a>
              <a class="cat-modal__link">Hisense</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">По диагонали</div>
              <a class="cat-modal__link">до 40 дюймов</a>
              <a class="cat-modal__link">40-55 дюймов</a>
              <a class="cat-modal__link">от 65 дюймов</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Аудиотехника</div>
              <a class="cat-modal__link">Саундбары</a>
              <a class="cat-modal__link">Колонки</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-oyin">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Игрушки</div>
              <a class="cat-modal__link">Конструкторы</a>
              <a class="cat-modal__link">Куклы</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Подарочные наборы</div>
              <a class="cat-modal__link">Для мужчин</a>
              <a class="cat-modal__link">Для женщин</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-bola">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Коляски</div>
              <a class="cat-modal__link">Прогулочные</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Детская одежда</div>
              <a class="cat-modal__link">0-3 года</a>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-iqlim">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Кондиционеры</div>
              <a class="cat-modal__link">Сплит-системы</a>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Воздухоочистители</div>
              <div class="cat-modal__col-title" style="margin-top:20px">Вентиляторы</div>
            </div>
          </div>
        </div>

        <div class="cat-modal__panel" id="cat-gozellik">
          <div class="cat-modal__cols">
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Уход за лицом</div>
              <a class="cat-modal__link">Кремы и сыворотки</a>
              <div class="cat-modal__col-title" style="margin-top:20px">Парфюмерия</div>
            </div>
            <div class="cat-modal__col">
              <div class="cat-modal__col-title">Медицинские приборы</div>
              <a class="cat-modal__link">Тонометры</a>
              <a class="cat-modal__link">Термометры</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const btn      = document.querySelector('.category-main-btn');
  const overlay  = document.getElementById('catOverlay');
  const closeBtn = document.getElementById('catClose');

  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.contains('open') ? closeModal() : openModal();
  });

  overlay?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.cat-modal__item').forEach(item => {
    item.addEventListener('mouseenter', () => switchCat(item));
    item.addEventListener('click',      () => switchCat(item));
  });

  function switchCat(item) {
    document.querySelectorAll('.cat-modal__item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    document.querySelectorAll('.cat-modal__panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('cat-' + item.dataset.cat);
    if (panel) panel.classList.add('active');
  }

  function openModal() {
    modal.classList.add('open');
    btn?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    btn?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.addEventListener('load', createCategoryModal);






















// ===== OBZOR SAHIFASIGA O'TISH =====
function goToObzor(id) {
  const path = window.location.pathname;
  if (path.includes('/src/html/')) {
    window.location.href = './obzor.html?id=' + id;
  } else {
    window.location.href = '../../src/html/obzor.html?id=' + id;
  }
}


// ===== SAVAT SAHIFASIGA O'TISH (har qaysi sahifadan ishlaydi) =====
function goToCartPage() {
  const path = window.location.pathname;
  if (path.includes('/src/html/')) {
    window.location.href = './savat.html';
  } else {
    window.location.href = '../../src/html/savat.html';
  }
}

// ====================== SAVAT HOVER DROPDOWN ======================

function createCartDropdown() {
  const dropdown = document.createElement('div');
  dropdown.id = 'cartDropdown';
  dropdown.innerHTML = `
    <div class="cart-drop__inner">
      <div class="cart-drop__list" id="cartDropList">
        <!-- JS to'ldiradi -->
      </div>
      <div class="cart-drop__empty" id="cartDropEmpty" style="display:none;">
        <i class="ri-shopping-cart-2-line"></i>
        <span>Savat bo'sh</span>
      </div>
      <div class="cart-drop__footer" id="cartDropFooter" style="display:none;">
        <div class="cart-drop__total">
          <span>Сумма</span>
          <strong id="cartDropTotal">0 сум</strong>
        </div>
        <button class="cart-drop__btn-main" onclick="goToPage('src/html/savat.html')">
          ОФОРМИТЬ ПОКУПКУ
        </button>
        <button class="cart-drop__btn-link" onclick="goToPage('src/html/savat.html')">
          ПЕРЕЙТИ В КОРЗИНКУ
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(dropdown);

  // ===== SAVAT IKONASI =====
  const shopIcon = document.getElementById('shop')?.closest('div');
  if (!shopIcon) return;

  // Pozitsiya uchun
  shopIcon.style.position = 'relative';

  let hideTimeout;

  shopIcon.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    updateCartDropdown();
    positionDropdown(shopIcon);
    dropdown.classList.add('open');
  });

  shopIcon.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove('open');
    }, 200);
  });

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  dropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove('open');
    }, 200);
  });
}

// ===== DROPDOWN POZITSIYASI =====
function positionDropdown(anchor) {
  const dropdown = document.getElementById('cartDropdown');
  const rect = anchor.getBoundingClientRect();
  // ✅ Icon o'ng tomonidan — dropdown chap tomonga ochiladi
  dropdown.style.top   = (rect.bottom + window.scrollY + 8) + 'px';
  dropdown.style.left  = 'auto';
  dropdown.style.right = (window.innerWidth - rect.right - window.scrollX) + 'px';
}

// ===== DROPDOWNNI YANGILASH =====
function updateCartDropdown() {
  const cartIds = JSON.parse(localStorage.getItem('cart')) || [];
  const list    = document.getElementById('cartDropList');
  const empty   = document.getElementById('cartDropEmpty');
  const footer  = document.getElementById('cartDropFooter');
  const totalEl = document.getElementById('cartDropTotal');

  list.innerHTML = '';

  if (cartIds.length === 0) {
    empty.style.display  = 'flex';
    footer.style.display = 'none';
    return;
  }

  empty.style.display  = 'none';
  footer.style.display = 'block';

  let total = 0;

  cartIds.slice(0, 5).forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const priceNum = parseInt(product.price.replace(/\D/g, ''));
    total += priceNum;

    const item = document.createElement('div');
    item.className = 'cart-drop__item';
    item.style.cursor = 'pointer';
    item.innerHTML = `
      <img src="../../${product.image}" alt="${product.title}">
      <div class="cart-drop__item-info" onclick="goToPage('src/html/obzor.html?id=${id}')" style="cursor:pointer;flex:1;">
        <div class="cart-drop__item-name">${product.title}</div>
        <div class="cart-drop__item-price">${product.price}</div>
      </div>
      <button class="cart-drop__item-remove" onclick="removeFromCartDrop(${id})">
        <i class="ri-delete-bin-6-line"></i>
      </button>
    `;
    list.appendChild(item);
  });

  if (cartIds.length > 5) {
    const more = document.createElement('div');
    more.className = 'cart-drop__more';
    more.textContent = `+ yana ${cartIds.length - 5} ta mahsulot`;
    list.appendChild(more);
  }

  totalEl.textContent = total.toLocaleString('ru-RU') + ' сум';
}

// ===== SAVATDAN O'CHIRISH =====
function removeFromCartDrop(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(i => i !== id);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Karta ikonasini ham tiklash
  const cartBtn = document.querySelector(`.cart-btn[data-id="${id}"] i`) ||
    document.querySelector(`.product-card .heart-btn[data-id="${id}"]`)
      ?.closest('.product-card')?.querySelector('.cart-btn i');
  if (cartBtn) {
    cartBtn.classList.replace('ri-close-large-line', 'ri-shopping-cart-2-line');
  }

  updateCounts();
  updateCartDropdown();
}

window.addEventListener('load', () => {
  createCartDropdown();
});
