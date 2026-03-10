/* ghassa-components.js – shared nav, footer, WhatsApp float */

(function () {
  /* ── helpers ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return currentPage === href ? 'active' : '';
  }

  /* ── NAV ── */
  const navHTML = `
<div class="kente-stripe"></div>
<nav id="ghassa-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="ghassa-logo.png" alt="GHASSA Logo" onerror="this.style.display='none';this.nextSibling.style.width='44px';this.nextSibling.style.height='44px';">
      <div class="nav-logo-text">
        <span>GHASSA</span>
        <span>Ghanaian Students in Spain Alliance</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
      <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
      <li><a href="team.html" class="${isActive('team.html')}">Team</a></li>
      <li><a href="events.html" class="${isActive('events.html')}">Events</a></li>
      <li><a href="gallery.html" class="${isActive('gallery.html')}">Gallery</a></li>
      <li><a href="resources.html" class="${isActive('resources.html')}">Resources</a></li>
      <li><a href="news.html" class="${isActive('news.html')}">News</a></li>
      <li><a href="donate.html" class="${isActive('donate.html')}">Donate</a></li>
      <li class="nav-cta"><a href="membership.html" class="${isActive('membership.html')}">Join Us</a></li>
    </ul>
    <div class="lang-switcher">
      <button class="lang-btn active" onclick="setLang('en')">EN</button>
      <button class="lang-btn" onclick="setLang('es')">ES</button>
      <button class="lang-btn" onclick="setLang('tw')">TW</button>
    </div>
    <button class="nav-hamburger" id="hamburger-btn" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-nav" id="mobile-nav">
  <a href="index.html">🏠 Home</a>
  <a href="about.html">ℹ️ About</a>
  <a href="team.html">👥 Team</a>
  <a href="events.html">📅 Events</a>
  <a href="gallery.html">🖼️ Gallery</a>
  <a href="resources.html">📚 Resources</a>
  <a href="news.html">📰 News</a>
  <a href="donate.html">💛 Donate</a>
  <a href="contact.html">✉️ Contact</a>
  <a href="membership.html" class="mobile-join">🌟 Join GHASSA</a>
</div>`;

  /* ── FOOTER ── */
  const footerHTML = `
<!-- Newsletter -->
<div class="newsletter-banner">
  <h3>Stay Connected with GHASSA</h3>
  <p>Get updates on events, resources, and opportunities for Ghanaians in Spain.</p>
  <form class="newsletter-form" onsubmit="handleNewsletter(event)">
    <input type="email" placeholder="Your email address" required>
    <button type="submit">Subscribe</button>
  </form>
</div>
<footer id="ghassa-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">
        <img src="ghassa-logo.png" alt="GHASSA" width="44" height="44"
          style="border-radius:50%;background:var(--green-light);padding:3px;"
          onerror="this.outerHTML='<div style=\'width:44px;height:44px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.8rem;\'>GH</div>'">
        <div class="nav-logo-text" style="color:white;">
          <span style="color:var(--gold);">GHASSA</span>
          <span style="color:rgba(255,255,255,0.5);">Ghanaians in Spain Alliance</span>
        </div>
      </a>
      <p>A vibrant community of Ghanaian students and professionals in Spain — united by culture, driven by purpose.</p>
      <div class="footer-socials">
        <a href="https://www.instagram.com/ghassa.es/" target="_blank" class="footer-social-btn" title="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" class="footer-social-btn" title="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" class="footer-social-btn" title="WhatsApp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/ghassa/" target="_blank" class="footer-social-btn" title="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="#" class="footer-social-btn" title="TikTok">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Organisation</h4>
      <ul class="footer-links">
        <li><a href="about.html">About GHASSA</a></li>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="news.html">News & Updates</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul class="footer-links">
        <li><a href="resources.html">Resources</a></li>
        <li><a href="resources.html#faq">FAQ</a></li>
        <li><a href="membership.html">Join GHASSA</a></li>
        <li><a href="donate.html">Donate</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul class="footer-links">
        <li><a href="mailto:ghassa.spain@gmail.com">📧 ghassa.spain@gmail.com</a></li>
        <li><a href="https://www.instagram.com/ghassa.es/" target="_blank">📸 @ghassa.es</a></li>
        <li><a href="#">📍 España</a></li>
        <li><a href="#" style="color:var(--gold);">🌟 Founded 2023</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2024 GHASSA – Ghanaian Students in Spain Alliance. All rights reserved.</span>
    <span>Made with 🇬🇭❤️🇪🇸 for our community</span>
  </div>
</footer>`;

  /* ── WhatsApp Float ── */
  const waHTML = `
<a href="https://chat.whatsapp.com/EgznPuqoCCW69cec1qTG9Y" target="_blank" class="wa-float" title="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
</a>`;

  /* ── Inject into DOM ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML + waHTML);

  /* ── Hamburger toggle ── */
  document.getElementById('hamburger-btn').addEventListener('click', function () {
    document.getElementById('mobile-nav').classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    const nav = document.getElementById('mobile-nav');
    const btn = document.getElementById('hamburger-btn');
    if (nav && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  /* ── Language switcher ── */
  window.setLang = function (lang) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
    console.log('Language set to:', lang);
    // Full i18n can be added here
  };

  /* ── Newsletter ── */
  window.handleNewsletter = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.style.background = 'var(--gold-dark)';
    e.target.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
  };

  /* ── Stats counter animation ── */
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 20);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); observer.disconnect(); } });
  });
  const statsEl = document.querySelector('.stats-inner');
  if (statsEl) observer.observe(statsEl);

  /* ── FAQ ── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

})();
