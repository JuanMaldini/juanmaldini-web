import "./SkillCard.css";
import { SkillLevel } from "../../types";

type Props = {
  skill: string;
  level: SkillLevel;
};

export default function SkillCard({ skill, level }: Props) {
  return (
    <div className="skill-card">
      {skill} <span className="skill-level">{level}</span>
    </div>
  );
}
