import { useEffect, useState } from 'react';
import "./Curriculum.css";
import SkillCard from "../SkillCard/SkillCard";
import Onedrive from "../PortfolioBar/Onedrive";
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { ResumeData } from '../../data/types';
import resumeData from '../../data/resumeData';
const CVPdf = "../../../public/assets/CV/Maldini, Juan Augusto_2025.pdf";
import Button from "../00-Button/Button";

type Props = {};

export default function Curriculum({}: Props) {
  const [data, setData] = useState<ResumeData | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');

  useEffect(() => {
    // En un caso real, aquí harías una llamada a una API
    setData(resumeData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <h2>My Resume</h2>
        <div className="download-button-wrapper">
          <Button 
            goTo={CVPdf}
            text="Download CV"
            download="Maldini_Juan_Augusto_CV.pdf"
            className="download-cv-button"
          />
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button 
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div className="experience-section">
            <h3>Professional Experience</h3>
            <div className="experience-list">
              {data.experiences.map((exp) => (
                <ExperienceCard key={exp.position} experience={exp} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-section">
            <h3>Education & Certifications</h3>
            <div className="education-list">
              {data.education.map((edu) => (
                <EducationCard key={edu.titulo} education={edu} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {data.skills.map((skill) => (
                <SkillCard 
                  key={skill.skill} 
                  skill={skill.skill} 
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="additional-resources">
        <Onedrive />
      </div>
    </div>
  );
}
