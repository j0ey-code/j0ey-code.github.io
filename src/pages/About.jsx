import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { newTabProps } from '../lib/links';

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
                    related, I'm an avid writer and enjoy reading for leisure. I'm also a fairly proficient musician,
                    capable of playing a handful of different instruments and carrying a tune as well.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-section-heading">Resume</h2>
                <p>
                    A snapshot of my current resume. Click the image to open the PDF.
                </p>
                <a href="/assets/docs/resume_JCL.pdf" className="about-resume" {...newTabProps(true)}>
                    <img src="/assets/images/resume_JCL.png"
                        alt="My resume: education, experience, and technical skills"
                        loading="lazy"/>
                </a>
            </section>
        </>
    );
}
