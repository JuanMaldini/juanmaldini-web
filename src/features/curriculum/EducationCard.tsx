import { Education } from "@/data/types";

export default function EducationCard({
  education,
}: {
  education: Education;
}) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
      <header className="mb-2">
        <h3 className="text-lg font-semibold text-accent">
          {education.titulo}
        </h3>
        {education.subtitulo && (
          <h4 className="text-sm text-faint">{education.subtitulo}</h4>
        )}
      </header>

      <ul className="space-y-1">
        {education.datos.map((dato, idx) => (
          <li key={idx} className="text-sm text-muted">
            {dato}
          </li>
        ))}
      </ul>
    </article>
  );
}
