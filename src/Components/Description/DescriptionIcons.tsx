import "./Description.css";
const unreal = "../../../public/assets/Unreal.png";
const max = "../../../public/assets/3dMax.jpg";
const blender = "../../../public/assets/Blender.png";
const houdini = "../../../public/assets/Houdini.png";
const rizom = "../../../public/assets/Rizom.png";
const vray = "../../../public/assets/Vray.png";
const corona = "../../../public/assets/Corona.png";
const itoo = "../../../public/assets/Itoo.png";
const revit = "../../../public/assets/revit.png";
const autocad = "../../../public/assets/autocad.png";
const polycam = "../../../public/assets/Polycam.png";
const sketchfab = "../../../public/assets/sketchfab.png";
const html = "../../../public/assets/HTML.png";
const css = "../../../public/assets/CSS.png";
const python = "../../../public/assets/Python.png";
const javascript = "../../../public/assets/Javascript.png";
import c from "../../../public/assets/C++.png";
import bootstrap from "../../../public/assets/bootstrap.png";
import react from "../../../public/assets/react.png";
import node from "../../../public/assets/node.png";
import wix from "../../../public/assets/Wix.png";
const linux = "../../../public/assets/Linux.png";
const github = "../../../public/assets/github-b.png";
const git = "../../../public/assets/Git.png";
const vs = "../../../public/assets/VS.png";
const perforce = "../../../public/assets/Perforce.png";
const photoshop = "../../../public/assets/photoshop.png";
const illustrator = "../../../public/assets/Illustrator.png";
const figma = "../../../public/assets/Figma.png";
const ae = "../../../public/assets/AE.png";
const nuke = "../../../public/assets/Nuke.png";

type Props = {};

export default function DescriptionIcons({}: Props) {
  return (
    <div className="DescriptionIconsContainer">
      <div className="DescriptionIcons">
        <img src={unreal} alt="Unreal Engine icon" />
        <img src={max} alt="3D Max icon" />
        <img src={blender} alt="Blender icon" />
        <img src={houdini} alt="Houdini icon" />
        <img src={rizom} alt="Rizom icon" />
        <img src={vray} alt="V-Ray icon" />
        <img src={corona} alt="Corona Render icon" />
        <img src={itoo} alt="Itto Software icon" />
        <img src={revit} alt="Revit icon" />
        <img src={autocad} alt="Autocad icon" />
        <img src={polycam} alt="Polycam icon" />
        <img src={sketchfab} alt="AutocadSketchfab icon" />
        <img src={html} alt="HTML icon" />
        <img src={css} alt="CSS icon" />
        <img src={python} alt="Python icon" />
        <img src={javascript} alt="Javascript icon" />
        <img src={c} alt="C++ icon" />
        <img src={bootstrap} alt="Bootstrap icon" />
        <img src={react} alt="React icon" />
        <img src={node} alt="Node icon" />
        <img src={wix} alt="wix icon" />
        <img src={linux} alt="Linux icon" />
        <img src={github} alt="Github icon" />
        <img src={git} alt="Git icon" />
        <img src={vs} alt="Visual Studio icon" />
        <img src={perforce} alt="Perforce icon" />
        <img src={photoshop} alt="Photoshop icon" />
        <img src={illustrator} alt="Illustrator icon" />
        <img src={figma} alt="Figma icon" />
        <img src={ae} alt="After Effects icon" />
        <img src={nuke} alt="Nuke icon" />
      </div>
    </div>
  );
}
