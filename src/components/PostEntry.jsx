import { newTabProps } from '../lib/links';

/*
 * PostEntry
 * One row in the blog listing. Reads its content from a post object out
 * of src/data/posts.js.
 *
 * Plain <a> for the same reason as PreviewCard: every post is a static
 * .html page out of public/ (or, if `external`, an off-site link), never
 * a route in this app.
 */
export default function PostEntry({ post }) {
    return (
        <a href={post.href} className="post-entry" {...newTabProps(post.external)}>
            <div className="post-date">{post.date}</div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <span className="post-read">Read More &rarr;</span>
        </a>
    );
}
