import React from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';
import './ProjectVideoCard.css';

interface ProjectVideoCardProps {
  project: Project;
}

const ProjectVideoCard: React.FC<ProjectVideoCardProps> = ({ project }) => {
  const video = project.media[0];

  return (
    <article className="project-card">
      <div className="media-container">
        <div className="video-wrapper">
          <video
            src={video.url}
            controls
            style={{
              borderRadius: '10px',
              width: '100%',
              height: '100%',
              aspectRatio: '16/9'
            }}
            typeof="video/mp4"
          />
        </div>
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

export default ProjectVideoCard;
