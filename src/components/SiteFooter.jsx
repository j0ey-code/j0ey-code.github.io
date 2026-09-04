/*
 * SiteFooter
 * The footer block that was repeated verbatim at the bottom of all six
 * pages -- including the landing page, which is why this is its own
 * component rather than living inside Layout: Layout wraps the five inner
 * pages, but the landing page has a footer without a header or nav.
 */

/* Kept next to the markup that uses it; if a fourth link ever shows up it
   goes here rather than in six different files. */
const FOOTER_LINKS = [
    { label: 'GitHub',   href: 'https://github.com/j0ey-code' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-lincoln-79055b3b4/' },
    { label: 'Email',    href: 'mailto:alias.glacier901@passmail.net' },
];

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="footer-links">
                {FOOTER_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        /* mailto: opens a mail client, not a tab, so the
                           new-tab treatment only applies to real URLs. */
                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <span className="footer-copy">&copy; 2026 j0ey-code — All Rights Reserved</span>
        </footer>
    );
}
