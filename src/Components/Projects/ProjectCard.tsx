import React from 'react';
import { Project } from '../../data/types';
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
          />
        ) : (
          <img
            src={media.url}
          />
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
