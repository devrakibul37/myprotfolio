
/* =====================================================
   Footer interactions
   Scoped to #rkf-footer
   ===================================================== */

(function () {
  'use strict';

  function init() {
    var root = document.getElementById('rkf-footer');

    if (!root) return;

    // 1. Auto year
    var year = root.querySelector('[data-rkf-year]');

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    // 2. Back to Top
    // Hidden by default; visible after 400px scroll
    var top = root.querySelector('[data-rkf-top]');

    if (top) {
      // Initial state
      top.classList.remove('is-visible');
      top.classList.add('rkf__top-hidden');

      // Check scroll position
      function toggleBackToTop() {
        if (window.scrollY >= 400) {
          top.classList.add('is-visible');
        } else {
          top.classList.remove('is-visible');
        }
      }

      // Listen for scrolling
      window.addEventListener('scroll', toggleBackToTop, {
        passive: true
      });

      // Check initial scroll position
      toggleBackToTop();

      // Scroll smoothly to top on click
      top.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // 3. Button Ripple Effect
    var btn = root.querySelector('[data-rkf-btn]');

    if (btn) {
      btn.addEventListener('click', function (e) {
        var rect = btn.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);

        var ripple = document.createElement('span');

        ripple.className = 'rkf__ripple';

        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';

        ripple.style.left =
          (e.clientX - rect.left - size / 2) + 'px';

        ripple.style.top =
          (e.clientY - rect.top - size / 2) + 'px';

        btn.appendChild(ripple);

        setTimeout(function () {
          ripple.remove();
        }, 600);
      });
    }

    // 4. Social Hover State
    var links = root.querySelectorAll('.rkf__social-link');

    if (links.length) {
      var last = links[links.length - 1];

      links.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
          links.forEach(function (item) {
            item.classList.remove('is-active');
          });
        });

        link.addEventListener('mouseleave', function () {
          last.classList.add('is-active');
        });
      });
    }
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
