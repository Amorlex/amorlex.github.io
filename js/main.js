(function() {
  'use strict';

  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.getElementById('mobile-nav');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  function initScrollAnimations() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.querySelectorAll('.fade-in').forEach(function(el) {
        el.classList.add('visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(function(el) {
        el.classList.add('visible');
      });
      return;
    }

    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(function(el) {
      observer.observe(el);
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        
        var target = document.querySelector(href);
        if (!target) return;
        
        e.preventDefault();
        
        var headerHeight = document.querySelector('.site-header').offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, null, href);
        }
      });
    });
  }

  function updateYear() {
    var yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function init() {
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    updateYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
