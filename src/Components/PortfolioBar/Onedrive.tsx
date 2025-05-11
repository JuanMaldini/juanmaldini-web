import Button from "../00-Button/Button";
import "./Onedrive.css";
import { OnedriveLink } from "../00-Helper/Helper";

type Props = {};

export default function PortfolioBar({}: Props) {
  return (
    <div className="onedrive">
      <Button goTo={OnedriveLink} target="_blank" text="Portfolio" />
    </div>
  );
}
