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
  return (
    <div style={style}>
      <video
        src={sources[0].url}
        poster={poster}
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
          objectFit: 'cover'
        }}
        onError={(e) => {
          console.error('Error loading video:', e);
        }}
      >
        <source src={sources[0].url} type={sources[0].type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
