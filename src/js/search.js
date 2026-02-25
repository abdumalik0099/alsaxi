// ====================== SEARCH JS ======================

function initSearch() {
  const input = document.querySelector('.navSearch');
  if (!input) return;

  // Dropdown yaratish
  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown';
  dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    z-index: 9999;
    max-height: 400px;
    overflow-y: auto;
    display: none;
  `;

  // inputNav ga position: relative kerak
  const inputNav = input.closest('.inputNav');
  inputNav.style.position = 'relative';
  inputNav.appendChild(dropdown);

  // Yozgan sari qidirish
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();

    if (query.length < 1) {
      dropdown.style.display = 'none';
      return;
    }

    // products arraydan qidirish
    const results = products.filter(p =>
      p.title.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      dropdown.innerHTML = `
        <div style="padding:20px; text-align:center; color:#9ca3af; font-size:14px;">
          Ничего не найдено
        </div>
      `;
    } else {
      dropdown.innerHTML = `
        <div style="padding:12px 16px; font-size:13px; color:#6b7280; font-weight:600; border-bottom:1px solid #f3f4f6;">
          Товары
        </div>
        ${results.slice(0, 6).map(p => `
          <div class="search-item" onclick="goToSearch(${p.id})" style="
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 12px 16px;
            cursor: pointer;
            border-bottom: 1px solid #f9fafb;
            transition: background 0.15s;
          "
          onmouseover="this.style.background='#f9fafb'"
          onmouseout="this.style.background='#fff'"
          >
            <img src="${p.image}" alt="${p.title}" style="
              width: 52px;
              height: 52px;
              object-fit: contain;
              border-radius: 8px;
              background: #f3f4f6;
              padding: 4px;
              flex-shrink: 0;
            ">
            <div style="flex:1; min-width:0;">
              <div style="font-size:14px; color:#111; font-weight:500; 
                          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${highlightText(p.title, query)}
              </div>
            </div>
            <div style="font-size:14px; font-weight:700; color:#1a56db; white-space:nowrap; flex-shrink:0;">
              ${p.price}
            </div>
          </div>
        `).join('')}
      `;
    }

    dropdown.style.display = 'block';
  });

  // Tashqariga bosganda yopish
  document.addEventListener('click', (e) => {
    if (!inputNav.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });

  // Enter bosganda
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.style.display = 'none';
      input.value = '';
    }
  });
}

// Qidiruv natijasiga bosganda obzor.html ga o'tish
function goToSearch(id) {
  // Qaysi sahifada ekanligimizni tekshirish
  const path = window.location.pathname;

  if (path.includes('/src/html/') || path.includes('src\\html\\')) {
    window.location.href = './obzor.html?id=' + id;
  } else {
    window.location.href = './src/html/obzor.html?id=' + id;
  }
}

// Qidirilgan so'zni sariq bilan belgilash
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark style="background:#fef9c3; color:#111; border-radius:3px; padding:0 2px;">$1</mark>');
}

// Sahifa yuklanganda ishga tushirish
window.addEventListener('load', () => {
  initSearch();
});