import { newTabProps } from '../lib/links';

/*
 * ProjectCard
 * One card in the projects grid.
 *
 * `project.links` is an array, so the card renders however many links a
 * project happens to carry -- one for most, three for the tuner. The old
 * markup hardcoded each one, which is how the stray `class="preview-card"`
 * ended up on the C++ project's GitHub link: a copy-paste that no longer
 * has anywhere to come from.
 *
 * Every project link opens in a new tab, matching the original markup
 * (all of them were either an external URL, a PDF, or the standalone
 * tuner demo).
 */
export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-name">{project.name}</div>
            <div className="project-meta">{project.meta}</div>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
                {project.links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        {...newTabProps(true)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
