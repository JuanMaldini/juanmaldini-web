import "./SkillCard.css";

type Props = {
  skill: string;
  level: string;
};

export default function SkillCard({ skill, level }: Props) {
  return (
<div className="skillCard">
  {skill} <span className="ancentText">{level}</span>
</div>  );
}
