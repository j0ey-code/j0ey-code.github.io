import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

/*
 * SiteHeader
 * The nav bar that used to be copy-pasted into all five inner pages.
 *
 * Two chores disappear here:
 *
 *   1. `class="active"`. The old markup marked the current page by hand,
 *      which meant five copies of the nav each with a different <a>
 *      carrying the class -- and a broken highlight any time one of them
 *      was missed. NavLink derives it from the current URL instead.
 *
 *   2. The hamburger. site.js reached into the DOM with querySelector and
 *      flipped classes imperatively. Here the open/closed state is a
 *      useState boolean and the classes are just rendered from it, so
 *      there is no way for the button and the panel to disagree.
 */

/* One list, rendered twice over (desktop inline, mobile panel) instead of
   two hand-kept-in-sync copies of the same five links. */
const NAV_ITEMS = [
    { to: '/home',     label: 'Home' },
    { to: '/about',    label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog',     label: 'Blog' },
    { to: '/contact',  label: 'Contact' },
];

export default function SiteHeader() {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    /* Close the mobile panel whenever the route changes. In the old site
       this was free -- following a link loaded a whole new document, so
       the menu could not survive the navigation. A SPA keeps the header
       mounted across routes, so without this the panel would stay open
       over the page you just navigated to. */
    useEffect(() => {
        setNavOpen(false);
    }, [location.pathname]);

    return (
        <header className="site-header">
            <nav className="site-nav">

                {/* Hamburger toggle (visible on mobile only) */}
                <button
                    type="button"
                    className={`hamburger${navOpen ? ' is-open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={navOpen}
                    onClick={() => setNavOpen((open) => !open)}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Nav links (inline on desktop, collapsible panel on mobile) */}
                <div className={`nav-links${navOpen ? ' is-open' : ''}`}>
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            /* NavLink hands the callback an isActive flag it
                               works out from the URL. The class name matches
                               the one site.css already styles. */
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <Link to="/" className="mobile-return">&larr; Back to Landing</Link>
                </div>

            </nav>
        </header>
    );
}
