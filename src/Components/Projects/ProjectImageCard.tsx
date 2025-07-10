import React from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

interface ProjectImageCardProps {
  project: Project;
}

const ProjectImageCard: React.FC<ProjectImageCardProps> = ({ project }) => {
  const image = project.media[0];
  const [showModal, setShowModal] = React.useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <article className="project-card">
        <div className="media-container">
          <img
            src={encodeURI(image.url)}
            alt={project.title}
            className="project-media"
            loading="lazy"
            style={{ cursor: 'pointer' }}
            onClick={handleImageClick}
          />
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
      {showModal && (
        <div
          className="image-modal visible"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
          onClick={handleModalClick}
        >
          <img
            src={encodeURI(image.url)}
            alt={project.title}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '10px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7)'
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProjectImageCard;
