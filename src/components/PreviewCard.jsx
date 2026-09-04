import { newTabProps } from '../lib/links';

/*
 * PreviewCard
 * The teaser card used on the homepage, for both blog posts and featured
 * projects. The old homepage.html hand-wrote six of these; the shape was
 * identical every time, only the text differed -- which is exactly the
 * case a component with props is for.
 *
 * Note this renders a plain <a>, not a react-router <Link>. Every href it
 * receives points at something outside the React app: a GitHub URL, a PDF
 * in public/assets/docs, or the static win-c-compilers.html page. <Link>
 * would try to match those against the app's routes, find nothing, and
 * render the not-found page instead of letting the browser fetch the file.
 * <Link> is for routes; <a> is for everything else.
 */
export default function PreviewCard({ href, title, meta, excerpt, newTab }) {
    return (
        <a href={href} className="preview-card" {...newTabProps(newTab)}>
            <div className="preview-card-title">{title}</div>
            <div className="preview-card-meta">{meta}</div>
            <p className="preview-card-excerpt">{excerpt}</p>
        </a>
    );
}
