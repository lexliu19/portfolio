/* eslint-disable react/prop-types */
const Project = ({
  projectType,
  title,
  projectURL,
  description,
  technologies,
  image,
  id,
}) => {
  return (
    <article className={`${id % 2 == 0 && 'reverse'}`}>
      <div className="text">
        <h4>{projectType}</h4>
        <h3>{title}</h3>
        <p className="blackbox">
          {description}
          {projectURL.length > 0 && <a href={projectURL}>Check Project</a>}
        </p>
        <h4>Technologies used include:</h4>
        <ul>
          {technologies.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>
      <img src={image} alt={`image of ${image}`} />
    </article>
  );
};

export default Project;
