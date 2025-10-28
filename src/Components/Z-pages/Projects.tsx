import { useState } from "react";
import "./Projects.css";
import ProjectGrid from "../Projects/ProjectGrid";
import { Project } from "../../data/types";
import Onedrive from "../PortfolioBar/Onedrive";
import { projectMediaData } from "../../data/projectMediaData";

function Projects() {
  // Obtener todas las categorías únicas
  const categories = [
    "all",
    ...Array.from(new Set(projectMediaData.map((item) => item.category))),
  ];
  const [activeTab, setActiveTab] = useState<string>("all");

  // Cada item de projectMediaData será un Project individual - SIMPLIFICADO
  const allProjects: Project[] = projectMediaData.map((item, idx) => {
    const isVideo = item.path.includes(".mp4") || item.path.includes(".mov");

    return {
      id: `project_${idx}`,
      type: isVideo ? "video" : "image",
      category: item.category,
      media: [
        {
          url: item.path,
          type: isVideo ? "video" : "image",
        },
      ],
    };
  });

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <div>
          <h2>My Projects</h2>
        </div>
      </div>
      <div className="tabs">
        {categories.map((category: string) => {
          const displayName = category === "all" ? "All" : category;
          return (
            <button
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {displayName}
            </button>
          );
        })}
      </div>
      <div className="tab-content">
        <div className="projects-section">
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <div className="no-projects">
              No projects found in the "{activeTab}" category.
              <p>
                Make sure the {activeTab} category contains items in
                projectMediaData.ts.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="additional-resources">
        <Onedrive />
      </div>
    </div>
  );
}

export default Projects;
