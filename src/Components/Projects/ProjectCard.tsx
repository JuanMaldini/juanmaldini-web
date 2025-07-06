import React, { useRef } from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isVideoFile = (url: string): boolean => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  const isVideo = project.type === 'video' || isVideoFile(project.image || '');
  const mediaUrl = (isVideo && project.video) ? project.video : (project.image || '');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current.currentTime) {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <article className="project-card">
      <div 
        className="media-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isVideo ? (
          <video 
            ref={videoRef}
            src={mediaUrl}
            className="project-media"
            loop
            playsInline
            muted
            preload="metadata"
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt={project.title}
            className="project-media"
            loading="lazy"
          />
        )}
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
