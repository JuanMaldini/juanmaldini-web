import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../../types/project';
import './ProjectCard.css';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  // Determinar si el proyecto es un video basado en la extensión o el tipo
  const isVideoFile = (url: string): boolean => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  const isVideo = project.type === 'video' || (project.video ? true : isVideoFile(project.image || ''));
  const mediaUrl = isVideo ? (project.video || project.image || '') : (project.image || '');

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeTimeoutRef = useRef<NodeJS.Timeout>();

  // Efecto para manejar el volumen
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Control de reproducción con hover
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isHovering && !isPlaying) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => console.error('Error al reproducir:', e));
    } else if (!isHovering && isPlaying && !isFullscreen) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isHovering, isPlaying, isFullscreen]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    
    if (isFullscreen) {
      document.exitFullscreen().catch(console.error);
      setIsFullscreen(false);
    } else {
      videoRef.current.requestFullscreen().catch(console.error);
      setIsFullscreen(true);
    }
  };

  const handleVolumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (volume > 0) {
      // Si el volumen está activo, lo silenciamos
      setVolume(0);
      setShowVolume(false);
    } else {
      // Si está silenciado, lo activamos al 70%
      setVolume(0.7);
      setShowVolume(true);
      // Ocultar el control después de 2 segundos
      setTimeout(() => setShowVolume(false), 2000);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    // Si el volumen es 0, actualizamos el ícono inmediatamente
    if (newVolume === 0) {
      setShowVolume(false);
      return;
    }
    
    // Mostrar el control de volumen
    setShowVolume(true);
    
    // Resetear el temporizador para ocultar el control de volumen
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
    
    volumeTimeoutRef.current = setTimeout(() => {
      setShowVolume(false);
    }, 2000);
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const formatTitle = (title: string) => {
    return title
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  const getAssetUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    if (path.startsWith('/src/')) {
      return new URL(`../../..${path}`, import.meta.url).href;
    }
    return path;
  };

  // Crear el portal para el modal de imagen
  const modalContent = isFullscreen && project.type !== 'video' && (
    createPortal(
      <div 
        className="image-fullscreen-overlay"
        onClick={() => setIsFullscreen(false)}
      >
        <img 
          src={getAssetUrl(project.image)}
          alt={project.title}
          className="fullscreen-image"
        />
      </div>,
      document.body
    )
  );

  return (
    <article className="project-card">
      {isVideo ? (
        <div 
          className="media-container video"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleVideoClick}
        >
          <video 
            ref={videoRef}
            src={mediaUrl}
            className="project-media"
            controls={false}
            muted={volume === 0}
            loop
            playsInline
            preload="metadata"
            poster={project.image && !isVideoFile(project.image) ? project.image : undefined}
          />
          
          {/* Controles de volumen */}
          <div className={`video-controls ${showVolume ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
            <div className="volume-slider-container">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          </div>
          
          {/* Botón de volumen */}
          <button 
            className={`volume-button ${isHovering || showVolume ? 'visible' : ''}`}
            onClick={handleVolumeClick}
            aria-label={volume > 0 ? 'Silenciar' : 'Activar sonido'}
          >
            {volume > 0.5 ? '🔊' : volume > 0 ? '🔉' : '🔇'}
          </button>
        </div>
      ) : (
        <div 
          className="media-container image" 
          onClick={() => setIsFullscreen(true)}
        >
          <img 
            src={mediaUrl} 
            alt={project.title}
            className="project-media"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="project-content">
        <h3 className="project-title">
          {formatTitle(project.title.replace(/\.[^/.]+$/, ''))}
        </h3>
      </div>
      {modalContent}
    </article>
  );
}
