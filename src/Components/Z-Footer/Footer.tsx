import "./Footer.css";
import "../00-Helper/Helper.css"
import star from "../../assets/Icons/Icon-Star.png";
import github from "../../assets/Icons/Icon-Github.png"
import mail from "../../assets/Icons/Icon-Email.svg"
import whatsapp from "../../assets/Icons/Icon-Whatsapp.png"
import linkedin from "../../assets/Icons/Icon-LinkedIn.png"

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footerData">
        <p>© 2024 Created by</p>
        <a>
          <p>Juan Maldini</p>
        </a>
      </div>

      <div className="footerIcons">
        <a><img src={star}/></a>
        <a><img src={github}/></a>
        <a><img src={mail}/></a>
        <a><img src={whatsapp}/></a>
        <a><img src={linkedin}/></a>
      </div>

    </div>
  );
}
