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
        controls
        loop={loop}
        playsInline
        preload="metadata"
        poster={poster ? encodeURI(poster) : undefined}
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '10px', 
          objectFit: 'cover'
        }}
        onError={(e) => {
          console.error('Video error:', sources[0].url, e);
        }}
      >
        {sources.map((source, index) => (
          <source key={index} src={encodeURI(source.url)} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
