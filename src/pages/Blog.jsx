import PostEntry from '../components/PostEntry';
import { posts } from '../data/posts';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * Blog -- route "/blog".
 *
 * Same shape as Projects: the listing is a .map() over src/data/posts.js,
 * and the homepage's "From the Blog" section reads the first three
 * entries of that same array.
 */
export default function Blog() {
    useDocumentTitle('Blog');

    return (
        <>
            <h1 className="page-title">Blog</h1>
            <p className="page-intro">
                Thoughts, articles, writings, and reports on development, learning, tools, technologies,
                some light humanities here and there, etc. etc.
            </p>

            <div className="post-list">
                {posts.map((post) => (
                    <PostEntry key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}
