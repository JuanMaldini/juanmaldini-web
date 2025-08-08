import './ProjectGrid.css';
import ProjectCard from './ProjectCard';
import { Project } from '../../data/types';
import { useState } from 'react';

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  if (projects.length === 0) {
    return <div className="no-projects">No se encontraron proyectos en esta categoría.</div>;
  }

  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onImageClick={setLightboxUrl} />
        ))}
      </div>

      {lightboxUrl && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxUrl(null)}
          aria-modal="true"
          role="dialog"
        >
          <img
            src={lightboxUrl}
            alt="project"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
