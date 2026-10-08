import { useState } from "react";
import {
  ProjectGroup,
  getCategories,
  getProjects,
  externalProjects,
} from "@/data/projects";
import PortfolioButton from "@/components/PortfolioButton";
import ProjectGrid from "./ProjectGrid";
import WebPreview from "./WebPreview";

const tabs: { id: ProjectGroup; label: string }[] = [
  { id: "3d", label: "3D" },
  { id: "programming", label: "Programming" },
];

function CategoryChips({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={[
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            active === category
              ? "border-accent bg-chip text-ink"
              : "border-line bg-chip text-chip-ink hover:border-accent hover:text-ink",
          ].join(" ")}
        >
          {category === "all" ? "All" : category}
        </button>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectGroup>("3d");
  const [category3d, setCategory3d] = useState("all");

  const goTo = (tab: ProjectGroup) => {
    setActiveTab(tab);
    document
      .getElementById("tab-content")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const TabBar = () => (
    <div className="flex flex-wrap justify-center gap-2 border-b border-line">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => goTo(tab.id)}
          className={[
            "border-b-2 px-5 py-2 text-sm font-medium transition-colors",
            activeTab === tab.id
              ? "border-accent text-ink"
              : "border-transparent text-muted hover:text-ink",
          ].join(" ")}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-6 border-b border-line pb-4">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">My Projects</h2>
      </header>

      <div id="tab-content" className="scroll-mt-20">
        <TabBar />
      </div>

      <div className="py-8">
        {activeTab === "3d" && (
          <section>
            <h3 className="mb-5 text-xl font-semibold text-ink">
              3D &amp; Real-Time
            </h3>
            <CategoryChips
              categories={getCategories("3d")}
              active={category3d}
              onChange={setCategory3d}
            />
            <ProjectGrid projects={getProjects("3d", category3d)} />
          </section>
        )}

        {activeTab === "programming" && (
          <div className="flex flex-col gap-12">
            <section>
              <h3 className="mb-5 text-xl font-semibold text-ink">Web Apps</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {externalProjects.map((p) => (
                  <WebPreview key={p.label} label={p.label} url={p.url} />
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-5 text-xl font-semibold text-ink">
                Tools &amp; Scripts
              </h3>
              <ProjectGrid projects={getProjects("programming")} />
            </section>
          </div>
        )}
      </div>

      <TabBar />
      <PortfolioButton />
    </div>
  );
}
