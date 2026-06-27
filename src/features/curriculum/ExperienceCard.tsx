import { Experience } from "@/data/types";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
      <header className="mb-3">
        <h3 className="text-xl font-semibold text-accent">
          {experience.position}
        </h3>
        <div className="mt-1 font-medium text-ink">{experience.company}</div>
        <div className="text-sm text-faint">{experience.location}</div>
        <div className="text-sm text-faint">{experience.period}</div>
      </header>

      <p className="text-sm leading-relaxed text-muted">
        {experience.description}
      </p>

      {experience.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-chip px-3 py-1 text-xs text-chip-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
