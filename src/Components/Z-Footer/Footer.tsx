import "./Footer.css";
import "../00-Helper/Helper.css";
import SocialIconsBar from "../Shared/SocialIconsBar";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-data">
          <p>© 2024 Created by Juan Maldini</p>
        </div>
        <div className="footer-social">
          <SocialIconsBar iconSize="20px" />
        </div>
      </div>
    </footer>
  );
}
