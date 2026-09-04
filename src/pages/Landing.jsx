import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * Landing -- the entry splash, route "/".
 *
 * The one page that does not use <Layout>: it has no header and no nav,
 * just content and the shared footer.
 */
export default function Landing() {
    useDocumentTitle('Landing');

    return (
        <>
            <main className="landing">
                <div className="landing-content">

                    <h1 className="landing-title">j0ey-code</h1>
                    <p className="landing-subtitle">
                        Full-Stack Programmer &middot; Systems Developer &middot; Avid Writer
                    </p>

                    <div className="landing-icon">
                        {/* The inline object-fit deliberately overrides the
                            `cover` in landing.css -- keeping it preserves the
                            original framing of the avatar. */}
                        <img
                            src="/assets/images/000.png"
                            alt="GitHub Avatar"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </div>

                    <Link to="/home" className="landing-enter">Enter</Link>

                </div>
            </main>

            <SiteFooter />
        </>
    );
}
