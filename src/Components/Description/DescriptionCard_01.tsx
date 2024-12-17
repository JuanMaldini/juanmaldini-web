import "./DescriptionCard.css"
import profile from "../../assets/Maldini, Juan Augusto.jpg"

type Props = {}

export default function DescriptionCard01({}: Props) {
  return (
    <div className="DescriptionCard01">

      <div>
        <img src={profile} alt="Profile picture" width={200}/>
        <p>Juan Augusto Maldini</p>
      </div>

      <div>
      -----------------
      </div>

      <div>
        <p>Web Developer</p>
        <p>Unreal Engine Developer</p>
        <p>3D Artist</p>
        <p>FX Artist</p>
      </div>
    </div>
  )
}