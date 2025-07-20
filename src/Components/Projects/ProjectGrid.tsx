import './ProjectGrid.css';
import ProjectCard from './ProjectCard';
import { Project } from '../../data/types';

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return <div className="no-projects">No se encontraron proyectos en esta categoría.</div>;
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
