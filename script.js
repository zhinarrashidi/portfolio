// دکمه سوییچ زبان رو پیدا می‌کنیم
const langBtn = document.getElementById('lang-btn');

// همه‌ی المنت‌هایی که data-en و data-fa دارن رو پیدا می‌کنیم
const elements = document.querySelectorAll('[data-en]');

// زبان فعلی رو نگه می‌داریم (پیش‌فرض انگلیسیه)
let currentLang = 'en';

langBtn.addEventListener('click', function () {
    if (currentLang === 'en') {
        // برو به فارسی
        currentLang = 'fa';
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
        langBtn.textContent = 'English';
    } else {
        // برگرد به انگلیسی
        currentLang = 'en';
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        langBtn.textContent = 'فارسی';
    }

    // متن هر المنت رو با زبان جدید عوض می‌کنیم
    elements.forEach(function (el) {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
});