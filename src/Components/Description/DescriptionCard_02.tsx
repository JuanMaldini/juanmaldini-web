import Button from "../00-Button/Button";
import "./Description.css";
import { aboutMe } from "../../data/resumeData";

export default function DescriptionCard02() {
  return (
    <div className="DescriptionCard02">
      <div>
        <h2>
          <p className="ancentText">Hello!</p>
        </h2>
        <h3>
          <p>Here is my info!</p>
        </h3>
      </div>

      <div className="button-group">
        <Button text="Curriculum" goTo="/curriculum" className="" />
        <Button text="Projects" goTo="/projects" className="" />
      </div>

      <div className="profile-description">
        {aboutMe.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
