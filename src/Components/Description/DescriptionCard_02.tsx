import Button from "../00-Button/Button"
import "./DescriptionCard.css"

type Props = {}

export default function DescriptionCard02({}: Props) {
  return (
    <div className="DescriptionCard02">

      <div>
        <p className="ancentText"><h2>Hello!</h2></p>
        <p><h3>Here is my info!</h3></p>
      </div>

      <div>
        <Button text="Curriculum" goTo={""}/>
        <Button text="Projects" goTo={""}/>
      </div>

      <div>
        <p>As a 3D Artist and Developer with over 7 years of experience, I am passionate about integrating creative and technical skills. While my background is rooted in Unreal Engine and 3D, I am currently expanding my expertise into web development and broader areas of digital production.</p>
        <p>My experience in Virtual Production, Development, Modeling, VFX, and AI technologies has equipped me with a unique skill set to tackle complex projects and adapt to evolving industry trends.</p>
        <p>I am always looking for new opportunities to expand my knowledge and collaborate with talented teams. Open to relocation to continue advancing my career.</p>
      </div>

    </div>
  )
}