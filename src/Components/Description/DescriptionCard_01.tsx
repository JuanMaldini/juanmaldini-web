import "./Description.css";
import profile from "../../../public/assets/Maldini, Juan Augusto.jpg";
import SocialIconsBar from "../Shared/SocialIconsBar";

type Props = {};

export default function DescriptionCard01({}: Props) {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-image-container">
          <img src={profile} alt="Profile picture" className="profile-image" />
          <h2 className="profile-name">Juan Augusto Maldini</h2>
        </div>

        <div className="divider"></div>

        <div className="profile-roles">
          <p className="role">Architectural Visualization</p>
          <p className="role">Unreal Engine Developer</p>
          <p className="role">Web Developer</p>
          <p className="role">3D Artist</p>
          <p className="role">FX Artist</p>
          <p className="role">VR</p>
          <p className="role">IA</p>
          <p className="role">Games</p>
        </div>

        <SocialIconsBar />
      </div>
    </div>
  );
}
