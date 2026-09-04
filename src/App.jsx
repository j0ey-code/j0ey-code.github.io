import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { useStreakParallax } from './hooks/useStreakParallax';

import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/*
 * App
 * The route table. Each of the old .html files becomes one <Route>.
 *
 *   index.html      ->  /
 *   homepage.html   ->  /home
 *   about.html      ->  /about
 *   projects.html   ->  /projects
 *   blog.html       ->  /blog
 *   contact.html    ->  /contact
 *
 * The five inner routes are nested inside the <Layout> route, so Layout
 * renders once and whichever child matches appears in its <Outlet />.
 * Landing sits outside that nesting because it has no header or nav.
 *
 * Two files stay outside the app entirely and are served straight out of
 * public/: win-c-compilers.html and tunerV2-index.html. They are plain
 * pages that already work, and links to them are plain <a> tags so the
 * browser fetches them normally rather than the router intercepting.
 */
export default function App() {
    /* Runs once for the whole app -- the streak layers are on <body>, so
       they persist across route changes and only need one set of
       listeners. */
    useStreakParallax();

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Landing />} />

                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
