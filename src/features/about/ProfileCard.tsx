import SocialIconsBar from "@/components/SocialIconsBar";
import { ASSETS } from "@/lib/techStack";

const roles = [
  "Architectural Visualization",
  "Unreal Engine Developer",
  "Web Developer",
  "3D Artist",
  "FX Artist",
  "VR",
  "IA",
  "AWS",
  "Games",
];

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <img
        src={ASSETS.profilePhoto}
        alt="Juan Augusto Maldini"
        className="h-40 w-40 rounded-full object-cover ring-2 ring-accent/60"
      />
      <h2 className="mt-4 text-center text-2xl font-bold text-ink">
        Juan Augusto Maldini
      </h2>

      <div className="my-5 h-px w-full bg-line" />

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        {roles.map((role) => (
          <span
            key={role}
            className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-chip-ink"
          >
            {role}
          </span>
        ))}
      </div>

      <SocialIconsBar className="mt-6" />
    </div>
  );
}
