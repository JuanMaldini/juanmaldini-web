import { Education } from '../../types';
import './Curriculum.css';

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <h3 className="education-institution">{education.institution}</h3>
      <div className="education-degree">{education.degree}</div>
      {education.field && (
        <div className="education-field">{education.field}</div>
      )}
      {education.period && (
        <div className="education-period">{education.period}</div>
      )}
      {education.description && (
        <p className="education-description">{education.description}</p>
      )}
    </article>
  );
}
