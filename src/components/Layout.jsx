import { Link, Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

/*
 * Layout
 * The shared frame for the five inner pages: return bar, header/nav,
 * page content, footer.
 *
 * In the old site this frame was copy-pasted into homepage.html,
 * about.html, projects.html, blog.html and contact.html -- roughly 30
 * lines of identical markup in each, five times over. It lives here once
 * now.
 *
 * <Outlet /> is React Router's slot: App.jsx nests the page routes inside
 * this one, and whichever page matches the URL renders in that position.
 * The landing page is deliberately NOT nested here -- it has no header or
 * nav, so it sits as its own top-level route and renders <SiteFooter />
 * directly.
 */
export default function Layout() {
    return (
        <>
            {/* Landing page return button (visible on desktop only) */}
            <div className="return-bar">
                <Link to="/" className="return-link">&larr; Landing</Link>
            </div>

            <SiteHeader />

            <main className="page-content">
                <Outlet />
            </main>

            <SiteFooter />
        </>
    );
}
