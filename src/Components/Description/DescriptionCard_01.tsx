import "./Description.css";
import profile from "../../assets/Maldini, Juan Augusto.jpg";
import star from "../../assets/Icons/Icon-Star.png";
import github from "../../assets/Icons/Icon-Github.png"
import mail from "../../assets/Icons/Icon-Email.svg"
import whatsapp from "../../assets/Icons/Icon-Whatsapp.png"
import linkedin from "../../assets/Icons/Icon-LinkedIn.png"
import { Email, Github, LinkedIn, Whatsapp, OnedriveLink } from "../00-Helper/Helper";

type Props = {};

export default function DescriptionCard01({}: Props) {
  return (
    <div className="DescriptionCard01">
      <div>
        <div>
          <img src={profile} alt="Profile picture" width={200} />
          <p>Juan Augusto Maldini</p>
        </div>

        <div>-----------------</div>

        <div>
          <p>Web Developer</p>
          <p>Unreal Engine Developer</p>
          <p>3D Artist</p>
          <p>FX Artist</p>
        </div>
      </div>
      <div className="DescriptionCard01Icons">
        <a href={OnedriveLink}  target="_blank"><img src={star}/></a>
        <a href={Github}  target="_blank"><img src={github}/></a>
        <a href={Email()} target="_blank"><img src={mail}/></a>
        <a href={Whatsapp}  target="_blank"><img src={whatsapp}/></a>
        <a href={LinkedIn} target="_blank"><img src={linkedin}/></a>
      </div>
    </div>
  );
}
