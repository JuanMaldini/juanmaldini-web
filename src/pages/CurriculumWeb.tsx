import Button from "@/Components/00-Button/Button";
import "./CurriculumWeb.css";
import Profile from "../../public/assets/Maldini, Juan Augusto.jpg";
import resumeData, {
  titulo,
  location as cvLocation,
  email as cvEmail,
  phone as cvPhone,
  aboutMe,
} from "@/data/resumeData";
const CVPdf = "/assets/CV/Maldini_Juan_Augusto.pdf";
const { experiences, education, skills } = resumeData;
import { exportCvPdf } from "@/Components/01-Curriculum/exportCvPdf";

export default function CurriculumWeb() {
  const handleDownload = async () => {
    const year = new Date().getFullYear();
    const fileName = `CV-MALDINI JUAN-${year}.pdf`;
    try {
      await exportCvPdf(fileName);
    } catch {
      // If generation fails, fallback to original static PDF
      const a = document.createElement("a");
      a.href = CVPdf;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return (
    <div className="cv-wrapper">
      <div className="curriculum-header nowrap">
        <h2>My Resume</h2>
        <div className="download-button-wrapper">
          <Button
            className="download-cv-button"
            goTo={CVPdf}
            text="Download CV"
            download={true}
            onClick={handleDownload}
          />
        </div>
      </div>
      <section
        className="cv-page"
        role="document"
        aria-label="Curriculum Vitae (A4)"
      >
        <div className="cv-grid">
          <div className="cv-cell cell--tl">
            <img
              src={Profile}
              style={{ width: "100%", height: "auto" }}
              alt="Profile"
            />
          </div>
          <div className="cv-cell cell--tr">
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
              {aboutMe.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h3>Skills & Technologies</h3>
              <div className="cv-skills">
                {skills.map((s) => (
                  <div className="cv-skill-line" key={s.skill}>
                    <span className="name">{s.skill}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="level">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="cv-cell cell--br">
            <div className="experience-section">
              <h3>Professional Experience</h3>

              {experiences.map((exp) => (
                <div
                  className="cv-card-experience"
                  key={`${exp.company}-${exp.position}-${exp.period}`}
                >
                  <div className="div1">
                    {exp.position} - {exp.company}
                  </div>
                  <div className="div2">{exp.period}</div>
                  <div className="div3">{exp.location}</div>
                  <div className="div4">{exp.description}</div>
                </div>
              ))}

              <h3>Education</h3>
              {education.map((exp) => (
                <div
                  className="cv-card-experience"
                  key={`${exp.titulo}-${exp.subtitulo}`}
                >
                  <div className="div1">{exp.titulo}</div>
                  <div className="div2">{exp.subtitulo}</div>
                  <div className="div4">
                    {Array.isArray(exp.datos) ? (
                      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                        {exp.datos.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.datos
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
