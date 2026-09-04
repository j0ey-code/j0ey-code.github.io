import { useEffect, useState } from 'react';

/*
 * useStreakParallax
 * Drifts the light streak upward as the page scrolls, by writing the
 * --streak-shift custom property that site.css reads for both streak
 * layers (body::before and body::after).
 *
 * This is the parallax block from the old assets/scripts/site.js, moved
 * into a hook. Two things changed in the move:
 *
 *   1. It returns a cleanup function that removes the listeners. The old
 *      script never did, and never needed to -- a full page navigation
 *      tore the whole document down anyway. A SPA does not: without the
 *      cleanup you would attach a fresh pair of scroll/resize listeners
 *      on every navigation and never drop the old ones.
 *
 *   2. Reduced motion is subscribed to, not sampled once. The old script
 *      read the media query a single time at load, so a visitor toggling
 *      the OS setting had to reload the page to see any effect.
 *
 * The tuning constants and the rAF-throttled scroll handling are
 * unchanged from the original.
 */

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

export function useStreakParallax() {
    /* Lazy initialiser: matchMedia runs once on mount rather than on
       every render. */
    const [reducedMotion, setReducedMotion] = useState(
        () => window.matchMedia(REDUCED_MOTION).matches,
    );

    /* Effect 1 -- keep `reducedMotion` in step with the OS setting. */
    useEffect(() => {
        const query = window.matchMedia(REDUCED_MOTION);
        const onChange = (event) => setReducedMotion(event.matches);

        query.addEventListener('change', onChange);
        return () => query.removeEventListener('change', onChange);
    }, []);

    /* Effect 2 -- run the drift, unless motion is being reduced. Listing
       `reducedMotion` as a dependency is what makes the toggle live: flip
       the OS setting and React tears this effect down and sets it back up
       with the new value. */
    useEffect(() => {
        const root = document.documentElement;

        if (reducedMotion) {
            /* Park the streak at rest rather than leaving whatever offset
               a previous run wrote behind. */
            root.style.setProperty('--streak-shift', '0px');
            return undefined;
        }

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

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [reducedMotion]);
}
