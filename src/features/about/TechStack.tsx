import { techStack } from "@/lib/techStack";

export default function TechStack() {
  return (
    <section className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {techStack.map((tech) => (
          <img
            key={tech.alt}
            src={tech.src}
            alt={`${tech.alt} icon`}
            title={tech.alt}
            loading="lazy"
            className="h-11 w-11 object-contain transition-transform duration-200 hover:scale-110 sm:h-12 sm:w-12"
          />
        ))}
      </div>
    </section>
  );
}
