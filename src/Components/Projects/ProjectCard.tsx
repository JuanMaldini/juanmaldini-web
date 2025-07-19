import React from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const media = project.media[0];

  return (
    <article className="project-card">
      <div className="media-container">
        {media.type === 'video' ? (
          <video
            src={media.url}
            controls
            muted
            loop
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px'
            }}
          />
        ) : (
          <img
            src={media.url}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

// Contexto simplificado para compatibilidad
const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default ProjectCard;
export { VideoProvider };
