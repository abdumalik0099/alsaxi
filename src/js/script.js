var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiperRight = new Swiper(".swiper_right .mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,          // har 3 sekundda
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper_right .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_right .swiper-button-next",
    prevEl: ".swiper_right .swiper-button-prev",
  },
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.nav-sticky');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '1111';
    navbar.style.background = '#fff';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.transition = 'top 1s ease-in-out'; // soft animatsiya
    navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'; // soya qo'shish
  } else {
    navbar.style.position = 'static'; // orqaga qaytarish
    navbar.style.boxShadow = 'none';
  }
});




// ====================== LOGIN MODAL ======================

function createLoginModal() {
  const modal = document.createElement('div');
  modal.id = 'loginModal';
  modal.innerHTML = `
    <div class="login-overlay" id="loginOverlay"></div>
    <div class="login-box">

      <button class="login-close" id="loginClose">
        <i class="ri-close-large-line"></i>
      </button>

      <div class="login-left">
        <div class="login-left__circle"></div>
        <div class="login-left__circle2"></div>
        <div class="login-left__logo">
          <i class="ri-shopping-bag-3-fill"></i>
        </div>
        <h2>Xush kelibsiz!</h2>
        <p>Kirish uchun ma'lumotlaringizni kiriting</p>
      </div>

      <div class="login-right">
        <div class="login-tabs">
          <button class="login-tab active" data-tab="login">Kirish</button>
          <button class="login-tab" data-tab="register">Ro'yxatdan o'tish</button>
        </div>

        <!-- LOGIN -->
        <div class="login-form active" id="tab-login">
          <div class="login-field" id="field-login-phone">
            <label>Telefon raqam</label>
            <div class="login-input-wrap">
              <i class="ri-phone-line"></i>
              <input type="tel" id="login-phone" placeholder="+998 __ ___ __ __" maxlength="17">
            </div>
            <span class="login-error" id="err-login-phone"></span>
          </div>
          <div class="login-field" id="field-login-pass">
            <label>Parol</label>
            <div class="login-input-wrap">
              <i class="ri-lock-line"></i>
              <input type="password" id="login-pass" placeholder="Parolingiz">
              <button class="login-eye" type="button" onclick="togglePass('login-pass', this)">
                <i class="ri-eye-off-line"></i>
              </button>
            </div>
            <span class="login-error" id="err-login-pass"></span>
          </div>
          <div class="login-forgot"><a href="#">Parolni unutdingizmi?</a></div>
          <button class="login-btn" type="button" onclick="submitLogin()">
            <span>Kirish</span><i class="ri-arrow-right-line"></i>
          </button>
        </div>

        <!-- REGISTER -->
        <div class="login-form" id="tab-register">
          <div class="login-field" id="field-reg-name">
            <label>Ism Familiya</label>
            <div class="login-input-wrap">
              <i class="ri-user-line"></i>
              <input type="text" id="reg-name" placeholder="Ismingiz">
            </div>
            <span class="login-error" id="err-reg-name"></span>
          </div>
          <div class="login-field" id="field-reg-phone">
            <label>Telefon raqam</label>
            <div class="login-input-wrap">
              <i class="ri-phone-line"></i>
              <input type="tel" id="reg-phone" placeholder="+998 __ ___ __ __" maxlength="17">
            </div>
            <span class="login-error" id="err-reg-phone"></span>
          </div>
          <div class="login-field" id="field-reg-pass">
            <label>Parol</label>
            <div class="login-input-wrap">
              <i class="ri-lock-line"></i>
              <input type="password" id="reg-pass" placeholder="Kamida 6 ta belgi">
              <button class="login-eye" type="button" onclick="togglePass('reg-pass', this)">
                <i class="ri-eye-off-line"></i>
              </button>
            </div>
            <span class="login-error" id="err-reg-pass"></span>
          </div>
          <div class="login-field" id="field-reg-pass2">
            <label>Parolni tasdiqlang</label>
            <div class="login-input-wrap">
              <i class="ri-lock-2-line"></i>
              <input type="password" id="reg-pass2" placeholder="Parolni qaytaring">
              <button class="login-eye" type="button" onclick="togglePass('reg-pass2', this)">
                <i class="ri-eye-off-line"></i>
              </button>
            </div>
            <span class="login-error" id="err-reg-pass2"></span>
          </div>
          <button class="login-btn" type="button" onclick="submitRegister()">
            <span>Ro'yxatdan o'tish</span><i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // ===== LISTENERLAR =====
  // ✅ id orqali aniq topiladi
  document.getElementById('loginOverlay')?.addEventListener('click', closeLoginModal);
  document.getElementById('loginClose')?.addEventListener('click', closeLoginModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLoginModal();
  });

  // TABS
  document.querySelectorAll('.login-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab)?.classList.add('active');
      clearErrors();
    });
  });

  // TELEFON FORMAT
  ['login-phone', 'reg-phone'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', function () {
      let val = this.value.replace(/\D/g, '');
      if (!val.startsWith('998')) val = '998' + val;
      val = val.substring(0, 12);
      let f = '+998';
      if (val.length > 3)  f += ' ' + val.substring(3, 5);
      if (val.length > 5)  f += ' ' + val.substring(5, 8);
      if (val.length > 8)  f += ' ' + val.substring(8, 10);
      if (val.length > 10) f += ' ' + val.substring(10, 12);
      this.value = f;
    });
  });
}

// ===== OCHISH — id orqali chaqiriladi =====
function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== KO'Z =====
function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  const icon  = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('ri-eye-off-line', 'ri-eye-line');
  } else {
    input.type = 'password';
    icon.classList.replace('ri-eye-line', 'ri-eye-off-line');
  }
}

// ===== XATOLAR =====
function showError(fieldId, errId, msg) {
  document.getElementById(fieldId)?.classList.add('has-error');
  const err = document.getElementById(errId);
  if (err) err.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll('.login-field').forEach(f => f.classList.remove('has-error'));
  document.querySelectorAll('.login-error').forEach(e => e.textContent = '');
}

// ===== REGEX =====
const REGEX = {
  phone: /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
  pass:  /^.{6,}$/,
  name:  /^[a-zA-ZÀ-ÿА-яЁё\s]{2,}$/,
};

// ===== LOGIN =====
function submitLogin() {
  clearErrors();
  let valid = true;
  const phone = document.getElementById('login-phone')?.value.trim();
  const pass  = document.getElementById('login-pass')?.value;

  if (!REGEX.phone.test(phone)) {
    showError('field-login-phone', 'err-login-phone', 'Telefon raqamni to\'g\'ri kiriting: +998 XX XXX XX XX');
    valid = false;
  }
  if (!REGEX.pass.test(pass)) {
    showError('field-login-pass', 'err-login-pass', 'Parol kamida 6 ta belgi bo\'lishi kerak');
    valid = false;
  }

  if (valid) {
    const btn = document.querySelector('#tab-login .login-btn');
    btn.innerHTML = '<i class="ri-loader-4-line spin"></i>';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<span>Kirish</span><i class="ri-arrow-right-line"></i>';
      btn.disabled = false;
      closeLoginModal();
      showLoginToast('✅ Muvaffaqiyatli kirdingiz!');
    }, 1500);
  }
}

// ===== REGISTER =====
function submitRegister() {
  clearErrors();
  let valid = true;
  const name  = document.getElementById('reg-name')?.value.trim();
  const phone = document.getElementById('reg-phone')?.value.trim();
  const pass  = document.getElementById('reg-pass')?.value;
  const pass2 = document.getElementById('reg-pass2')?.value;

  if (!REGEX.name.test(name)) {
    showError('field-reg-name', 'err-reg-name', 'Ism kamida 2 ta harf bo\'lishi kerak');
    valid = false;
  }
  if (!REGEX.phone.test(phone)) {
    showError('field-reg-phone', 'err-reg-phone', 'Telefon raqamni to\'g\'ri kiriting');
    valid = false;
  }
  if (!REGEX.pass.test(pass)) {
    showError('field-reg-pass', 'err-reg-pass', 'Parol kamida 6 ta belgi bo\'lishi kerak');
    valid = false;
  }
  if (pass !== pass2) {
    showError('field-reg-pass2', 'err-reg-pass2', 'Parollar mos kelmadi');
    valid = false;
  }

  if (valid) {
    const btn = document.querySelector('#tab-register .login-btn');
    btn.innerHTML = '<i class="ri-loader-4-line spin"></i>';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<span>Ro\'yxatdan o\'tish</span><i class="ri-arrow-right-line"></i>';
      btn.disabled = false;
      closeLoginModal();
      showLoginToast('🎉 Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
    }, 1500);
  }
}

// ===== TOAST =====
function showLoginToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
    background:#111; color:#fff; padding:12px 28px; border-radius:12px;
    font-size:15px; font-weight:600; z-index:999999; white-space:nowrap;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== SAHIFA YUKLANGANDA =====
window.addEventListener('load', () => {
  createLoginModal();

  // ✅ HTML ga id="loginTrigger" qo'shing
  const trigger = document.getElementById('loginTrigger');
  if (trigger) {
    trigger.addEventListener('click', openLoginModal);
  }
});