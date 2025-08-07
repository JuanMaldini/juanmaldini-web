import React, { Component } from 'react'
import { resumeData } from '../data/resumeData'
import './CurriculumWeb.css'

type Props = {}

type State = {}

class CurriculumWeb extends Component<Props, State> {
  state = {}

  renderExperienceItem = (experience: any, index: number) => {
    return (
      <div className="experience-item" key={index}>
        <div className="experience-header">
          <div className="experience-position">{experience.position}</div>
          <div className="experience-period">{experience.period}</div>
        </div>
        <div className="experience-company">{experience.company}</div>
        <div className="experience-location">{experience.location}</div>
        <div className="experience-description">{experience.description}</div>
        <div className="technologies-list">
          {experience.technologies.map((tech: string, techIndex: number) => (
            <span className="technology-tag" key={techIndex}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    )
  }

  renderEducationItem = (education: any, index: number) => {
    return (
      <div className="education-item" key={index}>
        <div className="education-title">{education.titulo}</div>
        <div className="education-period">{education.subtitulo}</div>
        <ul className="education-list">
          {education.datos.map((dato: string, datoIndex: number) => (
            <li key={datoIndex}>{dato}</li>
          ))}
        </ul>
      </div>
    )
  }

  renderSkillItem = (skill: any, index: number) => {
    const levelClass = skill.level.toLowerCase();
    
    return (
      <div className="skill-item" key={index}>
        <div className="skill-header">
          <div className="skill-name">{skill.skill}</div>
          <div className="skill-level">{skill.level}</div>
        </div>
        <div className="skill-bar">
          <div className={`skill-progress ${levelClass}`}></div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="curriculum-container">
        {/* <div className="cv-header">
          <h1 className="cv-name">Juan Augusto Maldini</h1>
          <div className="cv-title">Unreal Engine Developer & 3D Artist</div>
          <div className="cv-contact">
            <div className="cv-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <a href="https://github.com/JuanMaldini" target="_blank" rel="noopener noreferrer">github.com/JuanMaldini</a>
            </div>
            <div className="cv-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              <a href="https://linkedin.com/in/juanaugustomaldini" target="_blank" rel="noopener noreferrer">linkedin.com/in/juanaugustomaldini</a>
            </div>
            <div className="cv-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              <a href="mailto:juanmaldini@gmail.com">juanmaldini@gmail.com</a>
            </div>
            <div className="cv-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <a href="https://wa.me/+5493516303630" target="_blank" rel="noopener noreferrer">+54 9 351 630-3630</a>
            </div>
            <div className="cv-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <span>Córdoba, Argentina</span>
            </div>
          </div>
        </div> */}
        <div className="cv-container">
          <div className='cv-row1main'>
            <div className="cv-col-left-1">
              <h3>Columna Izquierda Fila 1</h3>
            </div>
            <div className="cv-col-right-1">
              <h3>Columna Derecha Fila 1</h3>
            </div>
          </div>
          <div className="cv-row2main">
            <div className="cv-col-left-2">
              <h3>Columna Izquierda Fila 2</h3>
            </div>
            <div className="cv-col-right-2">
              <h3>Columna Derecha Fila 2</h3>
            </div>
          </div>
        </div>

        {/* <div className="cv-row cv-row-top">
          <div className="cv-col-left">
            <img src="/assets/Logo.png" alt="Logo" style={{ width: '100%', maxWidth: '120px', margin: '0 auto', display: 'block' }} />
          </div>
          <div className="cv-col-right">
            <h1 className="cv-name" style={{ marginBottom: '0.5rem' }}>Juan Augusto Maldini</h1>
            <div className="cv-title">Unreal Engine Developer & 3D Artist</div>
          </div>
        </div>

        <div className="cv-row cv-row-bottom">
          <div className="cv-col-left">
            <div className="cv-section">
              <h2 className="cv-section-title">Habilidades</h2>
              <div className="skills-container">
                {resumeData.skills.map(this.renderSkillItem)}
              </div>
            </div>
          </div>
          <div className="cv-col-right">
            <div className="cv-section">
              <h2 className="cv-section-title">Experiencia Laboral</h2>
              {resumeData.experiences.map(this.renderExperienceItem)}
            </div>

            <div className="cv-section">
              <h2 className="cv-section-title">Educación</h2>
              <div className="education-container">
                {resumeData.education.map(this.renderEducationItem)}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default CurriculumWeb