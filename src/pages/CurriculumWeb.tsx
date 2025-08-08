import Button from '@/Components/00-Button/Button';
import './CurriculumWeb.css';
import Profile from '../../public/assets/Maldini, Juan Augusto.jpg';
import { titulo, location as cvLocation, email as cvEmail, phone as cvPhone, aboutMe } from '@/data/resumeData';
const CVPdf = "/assets/CV/Maldini_Juan_Augusto.pdf";

export default function CurriculumWeb() {
  return (
    <div className="cv-wrapper">
        <div className="curriculum-header">
        <h2>My Resume</h2>
        <h6>Under Maintenance - Download the original</h6>
        <div className="download-button-wrapper">
            <Button 
            className="download-cv-button"
            goTo={CVPdf}
            text="Download CV"
            download="Maldini_Juan_Augusto.pdf"
            />
        </div>
        </div>
        <section className="cv-page" role="document" aria-label="Curriculum Vitae (A4)">
        <div className="cv-grid">
            <div className="cv-cell cell--tl" >
                <img src={Profile} style={{ width: '100%', height: 'auto'}} alt="Profile"/>
            </div>
            <div className="cv-cell cell--tr" >
                <div className="cv-header">
                    <h1>Juan Augusto Maldini</h1>
                    <p className="cv-role">{titulo}</p>
                    <p className="cv-contact">{cvLocation}</p>
                    <p className="cv-contact">{cvEmail}</p>
                    <p className="cv-contact">{cvPhone}</p>
                </div>
            </div>
            <div className="cv-cell cell--bl cv-about">
              <div className="cv-about__inner">
                <h3>About me</h3>
                <p>{aboutMe}</p>
                <h3>Skills & Technologies</h3>

              </div>
            </div>
            <div className="cv-cell cell--br" > {/*startiing to .map the experience in resumedata.ts*/}
                <div className="experience-section">
                    <h3>Professional Experience</h3>
                    <h3>Education</h3>
                </div>
                    
            </div>
        </div>
        </section>
    </div>
  );
}
