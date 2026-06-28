import Button from "@/components/Button";
import resumeData, {
  titulo,
  location as cvLocation,
  email as cvEmail,
  phone as cvPhone,
  aboutMe,
} from "@/data/resume";
import { ASSETS } from "@/lib/techStack";
import { exportCvPdf } from "./exportCvPdf";
import "./resume-document.css";

const { experiences, education, skills } = resumeData;

export default function ResumeDocument() {
  const handleDownload = async () => {
    const year = new Date().getFullYear();
    const fileName = `CV-MALDINI JUAN-${year}.pdf`;
    try {
      await exportCvPdf(fileName);
    } catch {
      const a = document.createElement("a");
      a.href = ASSETS.cvPdf;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="resume-screen">
      <div className="resume-toolbar flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-ink">My Resume</h2>
        <div className="shrink-0">
          <Button text="Download CV" goTo={ASSETS.cvPdf} download onClick={handleDownload} />
        </div>
      </div>

      <div className="cv-scroll">
        <section className="cv-page" role="document" aria-label="Curriculum Vitae (A4)">
          <div className="cv-grid">
            <div className="cv-cell cv-photo">
              <img src={ASSETS.profilePhoto} alt="Profile" />
            </div>

            <div className="cv-cell">
              <div className="cv-header">
                <h1>Juan Augusto Maldini</h1>
                <p className="cv-role">{titulo}</p>
                <p className="cv-contact">{cvLocation}</p>
                <p className="cv-contact">{cvEmail}</p>
                <p className="cv-contact">{cvPhone}</p>
              </div>
            </div>

            <div className="cv-cell cv-about">
              <div className="cv-about__inner">
                <h3>About me</h3>
                {aboutMe.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <h3>Skills &amp; Technologies</h3>
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

            <div className="cv-cell">
              <div className="experience-section">
                <h3>Professional Experience</h3>
                {experiences.map((exp) => (
                  <div className="cv-card-experience" key={`${exp.company}-${exp.position}`}>
                    <div className="div1">
                      {exp.position} - {exp.company}
                    </div>
                    <div className="div2">{exp.period}</div>
                    <div className="div3">{exp.location}</div>
                    <div className="div4">{exp.description}</div>
                  </div>
                ))}

                <h3>Education</h3>
                {education.map((edu) => (
                  <div className="cv-card-experience" key={`${edu.titulo}-${edu.subtitulo}`}>
                    <div className="div1">{edu.titulo}</div>
                    <div className="div2">{edu.subtitulo}</div>
                    <div className="div4">
                      <ul>
                        {edu.datos.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
