import { SkillLevel } from "@/data/types";

type Props = {
  skill: string;
  level: SkillLevel;
};

export default function SkillCard({ skill, level }: Props) {
  return (
    <div className="flex w-fit items-center gap-3 rounded-lg border border-line bg-surface px-5 py-3 shadow-sm transition-colors hover:border-accent/50">
      <span className="font-medium text-ink">{skill}</span>
      <span className="text-sm font-semibold text-accent">{level}</span>
    </div>
  );
}
