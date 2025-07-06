import Button from "../00-Button/Button"
import "./Description.css"
import CVPdf from "../../assets/CV/Maldini, Juan Augusto_2025.pdf"

type Props = {}

export default function DescriptionCard02({}: Props) {
  return (
    <div className="DescriptionCard02">
      <div>
        <h2><p className="ancentText">Hello!</p></h2>
        <h3><p>Here is my info!</p></h3>
      </div>

      <div className="button-group">
        <Button 
          text="Curriculum" 
          goTo="/curriculum" 
          className=""
        />
        <Button 
          text="Projects" 
          goTo="#" 
          className=""
        />
      </div>

      <div className="profile-description">
        <p>As a 3D Artist and Developer with over 7 years of experience, I am passionate about integrating creative and technical skills. While my background is rooted in Unreal Engine and 3D, I am currently expanding my expertise into web development and broader areas of digital production.</p>
        <p>My experience in Virtual Production, Development, Modeling, VFX, and AI technologies has equipped me with a unique skill set to tackle complex projects and adapt to evolving industry trends.</p>
        <p>I am always looking for new opportunities to expand my knowledge and collaborate with talented teams. Open to relocation to continue advancing my career.</p>
      </div>
    </div>
  )
}