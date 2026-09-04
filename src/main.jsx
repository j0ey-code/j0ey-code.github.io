import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

/*
 * Stylesheets are imported here, once, in cascade order.
 *
 * Worth being clear about, because the file names make it look otherwise:
 * these are NOT scoped to a page. A bundler concatenates them into one
 * stylesheet that is loaded on every route, so `.about-section` is live
 * on the contact page too -- it simply never matches anything there. The
 * per-page split is organisation, not isolation.
 *
 * That is exactly why landing.css had to be trimmed during the port: its
 * old copy carried a global reset and an `html, body { height: 100% }`
 * that were harmless when only index.html loaded them, and would not be
 * here. See the note at the top of landing.css.
 *
 * site.css comes first because it defines the theme custom properties and
 * the base element styles the rest build on.
 */
import './styles/site.css';
import './styles/landing.css';
import './styles/home.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/blog.css';
import './styles/contact.css';

/*
 * Second half of the GitHub Pages SPA fallback (public/404.html is the
 * first). A direct load of, say, /projects gets bounced to "/" by that
 * page, which leaves the stashed path here. Restoring it into the address
 * bar BEFORE React mounts means React Router reads the intended URL on
 * its very first render and the visitor never sees the homepage flash.
 *
 * replaceState rather than pushState so the bounce leaves no history
 * entry to go "back" to.
 */
const redirectPath = sessionStorage.getItem('spa-redirect-path');
if (redirectPath) {
    sessionStorage.removeItem('spa-redirect-path');
    /* Guard against an open redirect: only ever restore a same-origin
       path. A value starting with "//" would be read as a protocol-
       relative URL to another host. */
    if (redirectPath.startsWith('/') && !redirectPath.startsWith('//')) {
        window.history.replaceState(null, '', redirectPath);
    }
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
