(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /* ===== Loader ===== */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('loader');
      if (loader) loader.classList.add('hide');
    }, 700);
  });

  /* ===== Header Scroll & Scroll-to-Top (rAF throttled) ===== */
  var header = document.getElementById('header');
  var scrollTopBtn = document.getElementById('scrollTop');
  var scrollScheduled = false;

  function onScrollFrame() {
    scrollScheduled = false;
    var y = window.scrollY || window.pageYOffset || 0;
    if (header && !header.classList.contains('is-subpage')) {
      header.classList.toggle('scrolled', y > 80);
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', y > 600);
    }
  }

  window.addEventListener('scroll', function () {
    if (!scrollScheduled) {
      scrollScheduled = true;
      window.requestAnimationFrame(onScrollFrame);
    }
  }, { passive: true });

  /* ===== Hero Slider (auto-rotate with pause) ===== */
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  var currentSlide = 0;
  var sliderTimer = null;
  var SLIDE_INTERVAL = 5500;
  var hero = document.querySelector('.hero');

  window.goToSlide = function (n) {
    if (slides.length === 0) return;
    if (n < 0 || n >= slides.length) return;
    if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = n;
    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  };

  function startSlider() {
    if (sliderTimer || slides.length <= 1 || prefersReducedMotion) return;
    sliderTimer = setInterval(function () {
      window.goToSlide((currentSlide + 1) % slides.length);
    }, SLIDE_INTERVAL);
  }

  function stopSlider() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  if (slides.length > 0) {
    startSlider();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopSlider();
      else startSlider();
    });
    if (hero) {
      hero.addEventListener('mouseenter', stopSlider);
      hero.addEventListener('mouseleave', startSlider);
    }
    /* Reset timer when user clicks a dot */
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        stopSlider();
        startSlider();
      });
    });
  }

  /* ===== Mobile Nav (iOS scroll-position-safe lock) ===== */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var savedScrollY = 0;

  function openMobileNav() {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + savedScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    hamburger.classList.add('active');
    mobileNav.classList.add('active');
    hamburger.setAttribute('aria-label', 'メニューを閉じる');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileNav() {
    if (!hamburger || !mobileNav) return;
    if (mobileNav.classList.contains('active')) closeMobileNav();
    else openMobileNav();
  }

  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', toggleMobileNav);
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (mobileNav.classList.contains('active')) closeMobileNav();
      });
    });
    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });
  }

  /* ===== Scroll Reveal ===== */
  var revealElements = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  } else if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ===== Scroll to Top ===== */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
})();
