import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/*
 * Projects -- route "/projects".
 *
 * The whole page body is now one .map() over the shared data. Adding a
 * seventh project means adding an object to src/data/projects.jsx; this
 * file does not change, and neither does the homepage.
 */
export default function Projects() {
    useDocumentTitle('Projects');

    return (
        <>
            <h1 className="page-title">Projects</h1>
            <p className="page-intro">
                A collection of things I've coded and built, from single page web
                applications, to executable desktop programs and command-line utilities.
            </p>

            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}
