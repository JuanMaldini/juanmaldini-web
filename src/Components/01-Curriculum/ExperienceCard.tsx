import { Experience } from '../../types';
import './Curriculum.css';

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <h3 className="experience-position">{experience.position}</h3>
        <div className="experience-company">{experience.company}</div>
        <div className="experience-location">{experience.location}</div>
        <div className="experience-period">{experience.period}</div>
      </div>
      
      <div className="experience-description">
        <p>{experience.description}</p>
      </div>
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="experience-technologies">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
