import React, { useRef, useEffect, useContext, createContext } from 'react';
import { Project } from '../../types/project';
import './ProjectCard.css';

// Contexto para manejar qué video está reproduciéndose
type VideoContextType = {
  playingVideo: string | null;
  setPlayingVideo: (id: string | null) => void;
  hasUserInteracted: boolean;
  setUserInteracted: (val: boolean) => void;
};

const VideoContext = createContext<VideoContextType>({ 
  playingVideo: null, 
  setPlayingVideo: () => {},
  hasUserInteracted: false,
  setUserInteracted: () => {}
});

const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playingVideo, setPlayingVideo] = React.useState<string | null>(null);
  const [hasUserInteracted, setUserInteracted] = React.useState(false);
  return (
    <VideoContext.Provider value={{ playingVideo, setPlayingVideo, hasUserInteracted, setUserInteracted }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, VideoContext };

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => {
  const { playingVideo, setPlayingVideo, hasUserInteracted, setUserInteracted } = useContext(VideoContext);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [manuallyPaused, setManuallyPaused] = React.useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  // Usar el array de medios del proyecto
  const allMedia = project.media;
  const currentMedia = allMedia[currentMediaIndex];
  const isCurrentVideo = currentMedia?.type === 'video';
  const hasAdditionalMedia = allMedia.length > 1;
  
  // Manejar reproducción cuando cambia playingVideo o manualmente
  useEffect(() => {
    const video = videoRef.current;
    if (!isCurrentVideo || !video) return;

    const isPlaying = playingVideo === project.id && !manuallyPaused;
    console.log(`Video ${project.id} - Estado: ${isPlaying ? 'play' : 'pause'}`);

    const handlePlay = async () => {
      if (!isPlaying) {
        console.log(`Pausando video: ${project.id}`);
        // No hacemos nada al pausar, dejamos que el video mantenga su posición
        return;
      }

      // Si el usuario ya interactuó globalmente, intentar con sonido
      if (hasUserInteracted) {
        try {
          video.muted = false;
          await video.play();
          console.log(`Video ${project.id} reproduciéndose con sonido`);
        } catch (err) {
          // Si falla, fallback a muted
          console.warn(`No se pudo reproducir con sonido por hover, probando silenciado:`, err);
          video.muted = true;
          try {
            await video.play();
            console.log(`Video ${project.id} reproduciéndose silenciado (fallback)`);
          } catch (e) {
            console.error('No se pudo reproducir el video ni silenciado:', e);
          }
        }
      } else {
        // Si nunca hubo interacción, siempre muted
        video.muted = true;
        try {
          await video.play();
          console.log(`Video ${project.id} reproduciéndose silenciado (primer hover)`);
        } catch (e) {
          console.error('No se pudo reproducir el video silenciado:', e);
        }
      }
    };

    handlePlay();

    return () => {
      if (video && !video.paused) {
        console.log(`Limpieza: Pausando video ${project.id}`);
        video.pause();
      }
    };
  }, [playingVideo, , project.id, hasUserInteracted, manuallyPaused]);
  
  // Manejar interacciones
  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    console.log(`Interacción con proyecto: ${project.id}`);
    
    // Si es la primera interacción, activar sonido
    if (!hasUserInteracted) {
      console.log('Primera interacción global - Activando sonido');
      setUserInteracted(true);
    }
    
    // Si es un video, alternar reproducción
    if (isCurrentVideo) {
      const isCurrentlyPlaying = playingVideo === project.id;
      const shouldPlay = !isCurrentlyPlaying;
      console.log(`Cambiando estado de reproducción a: ${shouldPlay ? 'play' : 'pause'}`);
      
      if (shouldPlay) {
        setManuallyPaused(false);
        setPlayingVideo(project.id);
      } else {
        setManuallyPaused(true);
        setPlayingVideo(null);
      }
    }
  };
  
  // Manejar clic en miniatura
  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === currentMediaIndex) return;
    
    // Pausar el video actual si está reproduciéndose
    if (playingVideo === project.id) {
      setPlayingVideo(null);
    }
    setManuallyPaused(false);
    
    setCurrentMediaIndex(index);
    
    // Si el nuevo medio es un video, reproducirlo automáticamente
    if (allMedia[index].type === 'video' && window.innerWidth >= 768) {
      setPlayingVideo(project.id);
    }
  };

  return (
    <article 
      className="project-card"
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="media-container">
        {/* Contenedor del medio principal */}
        <div 
          className="main-media"
        >
          {isCurrentVideo ? (
            <video
              ref={videoRef}
              src={currentMedia.url}
              className="project-media"
              controls
              loop
              playsInline
              muted={!hasUserInteracted}
              preload="metadata"
              style={{ width: '100%', height: '100%', background: '#111' }}
            />
          ) : (
            <img
              src={currentMedia.url}
              alt={currentMedia.title || project.title}
              className="project-media"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          {/* Mostrar el título del medio actual */}
          <div className="media-title" style={{textAlign:'center', marginTop:'0.5rem', fontSize:'0.95rem', color:'#555'}}>
            {currentMedia.title}
          </div>
        </div>
        
        {hasAdditionalMedia && (
          <div className="additional-media">
            {allMedia.map((media, index) => (
              <div 
                key={`${project.id}-media-${index}`} 
                className={`additional-media-item ${index === currentMediaIndex ? 'active' : ''}`}
                onClick={(e) => handleThumbnailClick(index, e)}
                title={media.title}
              >
                {media.type === 'video' ? (
                  <video
                    src={media.url}
                    className="project-media-thumbnail"
                    loop
                    playsInline
                    muted
                    preload="metadata"
                  />
                ) : (
                  <img 
                    src={media.url} 
                    alt={media.title || `${project.title} - ${index + 1}`} 
                    className="project-media-thumbnail"
                    loading="lazy"
                  />
                )}
                {/* Mostrar el título de cada miniatura */}
                <div className="media-title" style={{textAlign:'center', fontSize:'0.8rem', color:'#888'}}>
                  {media.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
});

export default ProjectCard;
