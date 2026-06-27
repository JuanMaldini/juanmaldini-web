import { useState } from "react";
import { Project } from "@/data/types";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  if (projects.length === 0) {
    return (
      <div className="rounded-lg bg-bg2 px-4 py-12 text-center italic text-muted">
        No projects found in this category.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={setLightboxUrl}
          />
        ))}
      </div>

      {lightboxUrl && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-8 backdrop-blur-sm"
          onClick={() => setLightboxUrl(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightboxUrl}
            alt="project"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[95vh] max-w-[95vw] rounded-md object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
