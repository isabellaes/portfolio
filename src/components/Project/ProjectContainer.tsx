import { projects } from "../../utils/data";
import Project from "./Project";
import cardImg from "../../assets/project-image.png";

const ProjectsContainer = () => {
  return (
    <div id="Project" className="container-projectpage">
      <h1>
        Mina <span className="color-purple">projekt</span>
      </h1>
      <div className="flex-row">
        {projects.flatMap((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <img src={cardImg} alt="project" />
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.linktogit}>Github</a>
              <a href={`#${project.title}`}>Bilder</a>
            </div>
          </div>
        ))}
      </div>

      {projects.flatMap((project) => (
        <div id={project.title} className="module" key={project.title}>
          <Project
            title={project.title}
            description={project.description}
            img={project.img}
            linktogit={project.linktogit}
          ></Project>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
