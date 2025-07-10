import React, { useRef, useState } from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

interface ProjectVideoCardProps {
  project: Project;
}

const ProjectVideoCard: React.FC<ProjectVideoCardProps> = ({ project }) => {
  const video = project.media[0];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article className="project-card">
      <div className="media-container">
        <video
          ref={videoRef}
          src={encodeURI(video.url)}
          className="project-media"
          controls
          poster={project.media[0]?.url.replace(/\.(mp4|webm|mov|avi)$/i, '.jpg')}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <button className="video-play-pause-btn" onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
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
