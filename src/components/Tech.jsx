import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import TechBadge from './TechBadge';

const frontEndTechs = [
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'React.js',
  'Next.js',
];
const backEndTechs = [
  'Java',
  'Node.js',
  'Python',
  'Express.js',
  'MongoDB',
  'SQL',
  'Restful APIs',
];
const devTools = ['Git', 'Github', 'AWS', 'Postman', 'Figma', 'Jira'];

const Tech = () => {
  return (
    <div className="tech-stack">
      <h3 className="section-title">
        <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon> Tech Stack
      </h3>
      <div className="teches">
        <div>
          <h5>FrontEnd</h5>
          {frontEndTechs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div>
          <h5>BackEnd</h5>
          {backEndTechs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div>
          <h5>Tools and Services</h5>
          {devTools.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
