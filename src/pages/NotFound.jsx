import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * NotFound -- the catch-all route.
 *
 * The old site had no such page; an unknown URL got GitHub Pages' own
 * 404. Now that routing happens in the browser, unmatched paths are the
 * app's problem to handle.
 */
export default function NotFound() {
    useDocumentTitle('Page Not Found');

    return (
        <>
            <h1 className="page-title">Page Not Found</h1>
            <p className="page-intro">
                That page doesn't exist — it may have been moved or renamed.
            </p>
            <p>
                <Link to="/home" className="text-link">Back to the homepage</Link>
            </p>
        </>
    );
}
