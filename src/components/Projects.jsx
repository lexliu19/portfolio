import Project from './Project';
import data from '../project-data/projects.js';
const Projects = () => {
  return (
    <div className="section-blue">
      <div id="projects">
        <h2>Recent Projects</h2>
        {data.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
