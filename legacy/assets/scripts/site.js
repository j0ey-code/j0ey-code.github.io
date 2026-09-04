/*
 * site.js
 * Shared JavaScript for all pages
 */

/* ===========================
   MOBILE NAV TOGGLE
   (landing page has no nav, so guard the lookup)
   =========================== */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}

/* ===========================
   LIGHT STREAK PARALLAX
   Drifts the streak upward as the page scrolls by writing
   --streak-shift, which site.css reads for both streak layers.
   =========================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initStreakParallax() {
    const root = document.documentElement;
    const SPEED = 0.22;      /* fraction of scroll distance the streak travels */
    const MAX_DRIFT = 0.34;  /* cap, as a fraction of viewport height */

    let ticking = false;

    function updateStreak() {
        const cap = window.innerHeight * MAX_DRIFT;
        const drift = Math.min(window.scrollY * SPEED, cap);
        root.style.setProperty('--streak-shift', (-drift).toFixed(1) + 'px');
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateStreak);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateStreak();
}

if (!prefersReducedMotion.matches) {
    initStreakParallax();
}
