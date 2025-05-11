import "./Curriculum.css";
import SkillCard from "../SkillCard/SkillCard";
import Onedrive from "../PortfolioBar/Onedrive";

type Props = {};

export default function Curriculum({}: Props) {
  return (
    <div>
      <div>Experience</div>
      <div>Experience Cards</div>
      <div className="centerTitle">Education</div>
      <div>Education Cards</div>
      <div className="centerTitle">Skills</div>

      <div className="skillsCards">
        <SkillCard skill="Spanish" level="Native" />
        <SkillCard skill="English" level="Advanced" />
        <SkillCard skill="Italian" level="Beginner" />
        <SkillCard skill="Unreal Engine" level="Advanced" />
        <SkillCard skill="Niagara" level="Intermediate" />
        <SkillCard skill="Blueprints" level="Advanced" />
        <SkillCard skill="3D Max" level="Advanced" />
        <SkillCard skill="Blender" level="Intermediate" />
        <SkillCard skill="Houdini" level="Intermediate" />
        <SkillCard skill="Rizom UV" level="Intermediate" />
        <SkillCard skill="Vray" level="Advanced" />
        <SkillCard skill="Corona" level="Advanced" />
        <SkillCard skill="Clycles" level="Intermediate" />
        <SkillCard skill="Mantra" level="Intermediate" />
        <SkillCard skill="Revit" level="Beginner" />
        <SkillCard skill="Autocad" level="Intermediate" />
        <SkillCard skill="HTML" level="Intermediate" />
        <SkillCard skill="CSS" level="Intermediate" />
        <SkillCard skill="Python" level="Intermediate" />
        <SkillCard skill="Javascript" level="Intermediate" />
        <SkillCard skill="C++" level="Beginner" />
        <SkillCard skill="Bootstrap" level="Intermediate" />
        <SkillCard skill="React" level="Intermediate" />
        <SkillCard skill="Node" level="Intermediate" />
        <SkillCard skill="Linux" level="Beginner" />
        <SkillCard skill="Github" level="Intermediate" />
        <SkillCard skill="Git" level="Intermediate" />
        <SkillCard skill="Perforce" level="Beginner" />
        <SkillCard skill="Photoshop" level="Intermediate" />
        <SkillCard skill="Illustrator" level="Intermediate" />
        <SkillCard skill="Figma" level="Advanced" />
        <SkillCard skill="After Effects" level="Intermediate" />
        <SkillCard skill="Nuke" level="Beginner" />
        <SkillCard skill="Teamwork" level="Advanced" />
      </div>
      
      <div>
        <Onedrive />
      </div>
      
    </div>
  );
}
