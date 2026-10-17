/* =========================================================
   Weblance – main.js
   Handles: mobile nav, experience tabs, pricing toggle,
   FAQ accordion, scroll reveal animation
========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile Navigation ---------- */
  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (navClose && mobileNav) {
    navClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Experience / Education Tabs ---------- */
  // var tabButtons = document.querySelectorAll('.experience .tabs button');
  // tabButtons.forEach(function (btn) {
  //   btn.addEventListener('click', function () {
  //     var target = btn.getAttribute('data-tab');

  //     tabButtons.forEach(function (b) { b.classList.remove('active'); });
  //     btn.classList.add('active');

  //     document.querySelectorAll('.experience .content-panel').forEach(function (panel) {
  //       panel.classList.remove('active');
  //     });
  //     var targetPanel = document.getElementById(target);
  //     if (targetPanel) targetPanel.classList.add('active');
  //   });
  // });

  /* ---------- Pricing Monthly / Yearly Toggle ---------- */
  var pricingSwitch = document.getElementById('pricingSwitch');
  var priceEls = document.querySelectorAll('.price-card .price');

  // store original monthly values
  var monthlyPrices = [];
  priceEls.forEach(function (el, i) {
    monthlyPrices[i] = el.childNodes[0].textContent.trim();
  });

  if (pricingSwitch) {
    pricingSwitch.addEventListener('click', function () {
      var isYearly = pricingSwitch.classList.toggle('yearly');

      priceEls.forEach(function (el, i) {
        var raw = monthlyPrices[i].replace('$', '').replace('.00', '');
        var monthlyVal = parseFloat(raw);
        var span = el.querySelector('span');

        if (isYearly) {
          var yearlyVal = Math.round(monthlyVal * 12 * 0.85); // ~15% discount
          el.childNodes[0].textContent = '$' + yearlyVal.toLocaleString() + '.00 ';
          if (span) span.textContent = '/Yearly';
        } else {
          el.childNodes[0].textContent = monthlyPrices[i] + ' ';
          if (span) span.textContent = '/Monthly';
        }
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-q');
    question.addEventListener('click', function () {
      var isActive = item.classList.contains('active');
      faqItems.forEach(function (i) { i.classList.remove('active'); });
      if (!isActive) item.classList.add('active');
    });
  });

  /* ---------- Services dots slider (visual only) ---------- */
  var dots = document.querySelectorAll('.services .dots span');
  if (dots.length) {
    var dotIndex = 0;
    setInterval(function () {
      dots.forEach(function (d) { d.classList.remove('active'); });
      dotIndex = (dotIndex + 1) % dots.length;
      dots[dotIndex].classList.add('active');
    }, 3000);
  }

  /* ---------- Scroll Reveal ---------- */
  var revealTargets = document.querySelectorAll(
    '.service-card, .tool-card, .fact-card, .price-card, .testi-card, .blog-card, .award-card'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(function (el) { observer.observe(el); });

  /* ---------- Header shrink on scroll ---------- */
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (header) {
      header.style.boxShadow = window.scrollY > 20 ? '0 6px 20px rgba(0,0,0,0.4)' : 'none';
    }
  });

});

// header

const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });
}

if (navClose && mobileNav) {
  navClose.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
}
