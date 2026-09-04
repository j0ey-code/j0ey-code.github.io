import { Link } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';
import { posts } from '../data/posts';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * Home -- route "/home".
 *
 * This page is the clearest before/after in the whole port. The old
 * homepage.html spelled out six teaser cards by hand, and the text in
 * every one of them was a second copy of text that also lived in
 * blog.html or projects.html.
 *
 * Here it derives both lists from the shared data instead:
 *   - the three newest posts, because posts are chronological
 *   - the projects flagged `featured`, because "featured" is an editorial
 *     pick rather than whatever happens to be newest
 */
export default function Home() {
    useDocumentTitle('Home');

    const latestPosts = posts.slice(0, 3);
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <>
            {/* Hero / Intro */}
            <section className="hero">
                <h1 className="hero-name">j0ey-code</h1>
                <p className="hero-tagline">
                    Programmer, poweruser, developer, writer, musician, New Englander. <br />
                    A.S. in Computer-Information Science from Northern Essex Community College. <br />
                    Currently continuing my B.S. in Computer Science at Illinois State University. <br />
                    Looking for new opportunities to learn, grow, and develop professionally.
                </p>
            </section>

            {/* Latest Blog Posts Preview */}
            <section className="preview-section">
                <h2 className="section-heading">From the Blog</h2>

                {latestPosts.map((post) => (
                    <PreviewCard
                        key={post.id}
                        href={post.href}
                        title={post.title}
                        meta={post.date}
                        excerpt={post.excerpt}
                        newTab={post.external}
                    />
                ))}

                <Link to="/blog" className="preview-more">View All Posts &rarr;</Link>
            </section>

            {/* Featured Project Preview */}
            <section className="preview-section">
                <h2 className="section-heading">Featured Projects</h2>

                {featuredProjects.map((project) => (
                    <PreviewCard
                        key={project.id}
                        /* The first link is the project's primary destination:
                           GitHub for most, the live demo for the tuner. */
                        href={project.links[0].href}
                        title={project.name}
                        meta={project.meta}
                        excerpt={project.description}
                        newTab
                    />
                ))}

                <Link to="/projects" className="preview-more">See All Projects &rarr;</Link>
            </section>
        </>
    );
}
