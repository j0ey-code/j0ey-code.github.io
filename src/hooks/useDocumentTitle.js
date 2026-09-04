import { useEffect } from 'react';

/*
 * useDocumentTitle
 * Sets the browser tab title for the page that calls it.
 *
 * In the old site each .html file carried its own <title>. A SPA serves
 * one shell document for every route, so without this the tab would read
 * the same thing everywhere -- which costs you the browser-history
 * labels, the bookmark names, and the tab text a visitor scans for.
 *
 * Passing the bare page name and suffixing here keeps the six call sites
 * from having to repeat the site name (and from disagreeing about it --
 * the old blog.html title read "j0eycode", missing the hyphen every other
 * page used).
 */
const SITE_NAME = 'j0ey-code';

export function useDocumentTitle(pageName) {
    useEffect(() => {
        document.title = pageName ? `${pageName} — ${SITE_NAME}` : SITE_NAME;
    }, [pageName]);
}
