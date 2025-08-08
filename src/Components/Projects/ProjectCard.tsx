import React from 'react';
import { Project } from '../../data/types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onImageClick?: (url: string) => void;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onImageClick }) => {
  const media = project.media[0];
  return (
    <article className="project-card">
      <div className="media-container">
        {media.type === 'video' ? (
          <video
            src={media.url}
            controls
          />
        ) : (
          <img
            src={media.url}
            alt={project.id}
            className="project-media"
            style={{ cursor: onImageClick ? 'zoom-in' : 'default' }}
            onClick={() => onImageClick?.(media.url)}
          />
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
