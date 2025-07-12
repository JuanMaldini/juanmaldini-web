import React from 'react';

interface ProjectMediaVideoProps {
  sources: Array<{ url: string; type: string }>;
  poster: string;
  loop: boolean;
  style?: React.CSSProperties;
}

export default function ProjectMediaVideo({
  sources,
  poster,
  loop,
  style,
}: ProjectMediaVideoProps) {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Error loading video:', sources[0].url, e);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        color: '#666',
        fontSize: '14px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        <div>
          <p>Unable to load video</p>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>
            {sources[0].url.split('/').pop()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={style}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          color: '#666',
          fontSize: '14px',
          borderRadius: '10px'
        }}>
          Loading video...
        </div>
      )}
      <video
        src={encodeURI(sources[0].url)}
        poster={poster ? encodeURI(poster) : undefined}
        loop={loop}
        playsInline
        autoPlay={false}
        controls
        preload="metadata"
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '10px', 
          overflow: 'hidden',
          objectFit: 'cover',
          display: isLoading ? 'none' : 'block'
        }}
        onError={handleError}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
      >
        {sources.map((source, index) => (
          <source key={index} src={encodeURI(source.url)} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
