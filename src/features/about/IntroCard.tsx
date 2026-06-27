import Button from "@/components/Button";
import { aboutMe } from "@/data/resume";

export default function IntroCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <h2 className="text-3xl font-bold text-accent">Hello!</h2>
      <h3 className="mt-1 text-xl font-semibold text-ink">Here is my info!</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button text="Curriculum" goTo="/curriculum" />
        <Button text="Projects" goTo="/projects" />
      </div>

      <div className="mt-6 space-y-4">
        {aboutMe.map((paragraph, idx) => (
          <p key={idx} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
