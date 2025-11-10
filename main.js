// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Age from DOB (YYYY-MM-DD)
(function(){
  const dobEl = document.getElementById('dobValue');
  const ageEl = document.getElementById('ageValue');
  if (!dobEl || !ageEl) return;
  const dobText = dobEl.textContent.trim();
  const d = new Date(dobText);
  if (!isNaN(d)) {
    const today = new Date();
    let age = today.getFullYear() - d.getFullYear();
    const m = today.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
    ageEl.textContent = `${age}`;
  }
})();

// Mobile menu toggle
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
menuBtn?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
// Close menu when a link is clicked (mobile)
nav?.querySelectorAll('a')?.forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

// Print / Download PDF
document.getElementById('printBtn')?.addEventListener('click', () => window.print());

// WhatsApp Share (current URL)
(function(){
  const wa = document.getElementById('waShare');
  if (!wa) return;
  const text = encodeURIComponent("Biodata link: ");
  const url = encodeURIComponent(window.location.href);
  wa.href = `https://wa.me/?text=${text}${url}`;
})();
