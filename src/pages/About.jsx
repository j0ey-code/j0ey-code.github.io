import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * About -- route "/about".
 *
 * Mostly prose, so there is little to factor out. The skill list is the
 * one exception: nine <li> elements that are pure data.
 */

const SKILLS = [
    'Java',
    'C / C++',
    'HTML / CSS',
    'JavaScript',
    'Git',
    'Linux',
    'Windows',
    'Python',
    'x86 / ASM',
];

export default function About() {
    useDocumentTitle('About Me');

    return (
        <>
            <h1 className="page-title">About Me</h1>

            {/* Intro: portrait + bio */}
            <div className="about-intro">
                <div className="about-portrait">
                    <img src="/assets/images/001.png" alt="Headshot Picture of Me" />
                </div>

                <div className="about-bio">
                    <p>
                        I'm a programmer currently located just south of Chicagoland,
                        wrapping up my B.S. in Computer Science within the next two years.
                        Comfortable with a wide range of varying technologies; able to apply
                        application based solutions to multiple real-world domains.
                        Looking for new opportunities to learn, grow, and apply my skillsets
                        in professional, career-oriented, industry (or academic) contexts.
                    </p>
                </div>
            </div>

            {/* What I Work With */}
            <section className="about-section">
                <h2 className="about-section-heading">What I Work With</h2>
                <p>
                    A short list of tools, technologies, and programming languages
                    that I've most frequently worked with so far.
                </p>

                <ul className="tag-list">
                    {SKILLS.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Beyond Code */}
            <section className="about-section">
                <h2 className="about-section-heading">Beyond Code</h2>
                <p>
                    Besides programming, computer science, cybersecurity, or anything technology
                    related, I'm an avid reader and a skilled writer. I'm also a fairly proficient musician,
                    capable of playing a handful of different instruments and carrying a tune as well.
                </p>
            </section>

            {/* Get in Touch */}
            <section className="about-section">
                <h2 className="about-section-heading">Get in Touch</h2>
                <p>
                    If you want to talk about a project, position, opportunity, or other
                    collaborative effort, head over to the{' '}
                    {/* An internal route, so this one IS a <Link> -- it navigates
                        within the app instead of reloading the document. */}
                    <Link to="/contact" className="text-link">contact page</Link>
                    {' '}or find me on any of the platforms linked below in the site's footer.
                </p>
            </section>
        </>
    );
}
