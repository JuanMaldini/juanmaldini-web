import { Project } from "@/data/types";

type Props = {
  project: Project;
  onImageClick?: (url: string) => void;
};

export default function ProjectCard({ project, onImageClick }: Props) {
  const media = project.media[0];

  return (
    <article className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-sm">
      {media.type === "video" ? (
        <video
          src={media.url}
          controls
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={media.url}
          alt={project.id}
          loading="lazy"
          onClick={() => onImageClick?.(media.url)}
          className={`h-full w-full object-cover transition-transform duration-300 hover:scale-105 ${
            onImageClick ? "cursor-zoom-in" : ""
          }`}
        />
      )}
    </article>
  );
}
