import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * Contact -- route "/contact".
 *
 * The three rows were near-identical blocks of markup differing only in
 * icon, label and destination, so they are data now. `icon` holds a JSX
 * element: the SVG path data is genuinely per-row content, and there is
 * no styling to factor out of these elements -- contact.css already sets
 * stroke, fill and size for `.contact-icon svg`.
 *
 * The path data below is copied verbatim from the original contact.html;
 * only the line wrapping was collapsed. Note that SVG attributes are
 * camelCase in JSX: stroke-linecap becomes strokeLinecap.
 */

const CONTACTS = [
    {
        label: 'Email',
        href: 'mailto:alias.glacier901@passmail.net',
        value: 'alias.glacier901@passmail.net',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.468a1.875 1.875 0 0 1-1.594 0L2.25 6.75" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/j0ey-code',
        value: 'https://github.com/j0ey-code',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/j0ey-code/',
        value: 'https://www.linkedin.com/in/j0ey-code/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143 -6.378-.42c-1.085-.144-1.872-1.086-1.872 -2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0 -1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75a23.978 23.978 0 0 1-7.577 -1.22 2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837 -2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        ),
    },
];

export default function Contact() {
    useDocumentTitle('Contact');

    return (
        <>
            <h1 className="page-title">Contact &amp; Links</h1>
            <p className="page-intro">
                Whether you want to talk shop, collaborate on something, ask a question
                about a post, or just say hello, here's where to find me.
            </p>

            <ul className="contact-list">
                {CONTACTS.map((contact) => (
                    <li className="contact-item" key={contact.label}>
                        <div className="contact-icon">{contact.icon}</div>
                        <div className="contact-info">
                            <div className="contact-label">{contact.label}</div>
                            <a href={contact.href} className="contact-value">
                                {contact.value}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            <p className="contact-note">
                I'm generally pretty responsive to email and messages. If you're reaching
                out about a project or collaboration, a bit of context about what you have
                in mind goes a long way. If you're just saying hi, that's great too; I
                always appreciate hearing from people who read something here and feel
                like talking about it.
            </p>
        </>
    );
}
