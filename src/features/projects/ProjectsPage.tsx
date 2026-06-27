import { useState } from "react";
import {
  projectCategories,
  getProjectsByCategory,
  externalProjects,
} from "@/data/projects";
import PortfolioButton from "@/components/PortfolioButton";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = getProjectsByCategory(activeTab);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-6 border-b border-line pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-ink">My Projects</h2>
          <div className="flex flex-wrap gap-2">
            {externalProjects.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-chip px-3 py-1 text-xs font-medium
                           text-chip-ink transition-colors hover:border-accent hover:text-ink"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-2 border-b border-line">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={[
              "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
              activeTab === category
                ? "border-accent text-ink"
                : "border-transparent text-muted hover:text-ink",
            ].join(" ")}
          >
            {category === "all" ? "All" : category}
          </button>
        ))}
      </div>

      <div className="py-8">
        <ProjectGrid projects={filtered} />
      </div>

      <PortfolioButton />
    </div>
  );
}
