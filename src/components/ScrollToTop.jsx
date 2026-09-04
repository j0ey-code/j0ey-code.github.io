import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 * ScrollToTop
 * Scrolls to the top of the document whenever the route changes.
 *
 * A multi-page site got this for free: every link was a fresh document
 * load, which always started at the top. A SPA swaps the content without
 * touching the scroll position, so without this you could scroll to the
 * bottom of the Projects page, click Contact, and land halfway down it.
 *
 * Renders nothing -- it exists purely for the side effect.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        /* 'instant' rather than the smooth scrolling site.css sets on
           <html>: a page you just navigated to should already be at the
           top, not visibly travel there. */
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}
