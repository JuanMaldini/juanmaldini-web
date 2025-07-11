import React, { useState, useEffect } from 'react';

interface ProjectMediaImageProps {
  sources: string[]; // Orden de preferencia: webp, png, jpg
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

const ProjectMediaImage: React.FC<ProjectMediaImageProps> = ({
  sources,
  alt,
  style = {},
  className = '',
}) => {
  const [currentSource, setCurrentSource] = useState(sources[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Intentar cargar la imagen
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      // Intentar con la siguiente fuente disponible
      const currentIndex = sources.indexOf(currentSource);
      if (currentIndex < sources.length - 1) {
        setCurrentSource(sources[currentIndex + 1]);
        setIsLoaded(false);
      }
    };
    img.src = currentSource;
  }, [currentSource, sources]);

  const handleImageError = () => {
    // Intentar con la siguiente fuente disponible
    const currentIndex = sources.indexOf(currentSource);
    if (currentIndex < sources.length - 1) {
      setCurrentSource(sources[currentIndex + 1]);
    }
  };

  return (
    <div className="image-container" style={{ ...style, position: 'relative' }}>
      {/* Placeholder mientras carga */}
      {!isLoaded && (
        <div className="image-placeholder" style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: '#666'
        }}>
          Loading...
        </div>
      )}
      
      {/* La imagen real */}
      <img
        src={currentSource}
        alt={alt}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: isLoaded ? 'block' : 'none'
        }}
        className={className}
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
};

export default ProjectMediaImage;
