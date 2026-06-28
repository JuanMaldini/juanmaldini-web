import { useState } from "react";
import Button from "@/components/Button";
import PortfolioButton from "@/components/PortfolioButton";
import resumeData from "@/data/resume";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";

type Tab = "experience" | "education" | "skills";

const tabs: { id: Tab; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");
  const { experiences, education, skills } = resumeData;

  const goTo = (tab: Tab) => {
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
      <header className="mb-6 flex flex-row flex-nowrap items-center justify-between gap-3 border-b border-line pb-4">
        <h2 className="min-w-0 truncate text-2xl font-bold text-ink sm:text-3xl">
          My Resume
        </h2>
        <div className="shrink-0">
          <Button goTo="/curriculumweb" text="Printable CV" />
        </div>
      </header>

      <div id="tab-content" className="scroll-mt-20">
        <TabBar />
      </div>

      <div className="py-8">
        {activeTab === "experience" && (
          <section>
            <h3 className="mb-5 text-xl font-semibold text-ink">
              Professional Experience
            </h3>
            <div className="flex flex-col gap-5">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={`${exp.company}-${exp.position}`}
                  experience={exp}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "education" && (
          <section>
            <h3 className="mb-5 text-xl font-semibold text-ink">
              Education & Certifications
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {education.map((edu) => (
                <EducationCard key={edu.titulo} education={edu} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "skills" && (
          <section>
            <h3 className="mb-5 text-xl font-semibold text-ink">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.skill}
                  skill={skill.skill}
                  level={skill.level}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <TabBar />
      <PortfolioButton />
    </div>
  );
}
