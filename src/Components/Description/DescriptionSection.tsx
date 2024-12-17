import Button from "../00-Button/Button.tsx";
import DescriptionCard_01 from "./DescriptionCard_01";
import DescriptionCard_02 from "./DescriptionCard_02";
import DescriptionIcons from "./DescriptionIcons.tsx";
import "./DescriptionSection.css";
import {onedrive} from "../00-Helper/Helper.tsx";

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

      <div className="onedriveLine">
        <Button goTo={onedrive} target="_blank" text="Portfolio"/>
      </div>

    </div>
  );
}
