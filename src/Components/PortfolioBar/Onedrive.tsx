import Button from "../00-Button/Button";
import "./Onedrive.css";
import { OnedriveLink } from "../00-Helper/Helper";

type Props = {};

export default function PortfolioBar({}: Props) {
  return (
    <div className="portfolio-bar">
      <div className="portfolio-content">
        <Button 
          goTo={OnedriveLink} 
          target="_blank" 
          text="Ver Portafolio" 
        />
      </div>
    </div>
  );
}
