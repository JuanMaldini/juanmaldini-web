import DescriptionCard_01 from "./DescriptionCard_01";
import DescriptionCard_02 from "./DescriptionCard_02";
import DescriptionIcons from "./DescriptionIcons.tsx";
import "./Description.css";
import Onedrive from "../PortfolioBar/Onedrive.tsx";

type Props = {};

export default function DescriptionSection({}: Props) {
  return (
    <div className="descriptionSection">

      <div className="descriptionSectionCard">
        <DescriptionCard_01/>
        <DescriptionCard_02/>
      </div>

      <div className="descriptionSectionIcons">
        <DescriptionIcons/>
      </div>

      <div>
        <Onedrive />
      </div>

    </div>
  );
}
