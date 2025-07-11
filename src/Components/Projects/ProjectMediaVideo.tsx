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
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '10px', 
          overflow: 'hidden',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
