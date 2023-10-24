import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import { projects } from "../utils/data";
import Project from "../components/Project";
const ProjectsPage = () => {
  return (
    <div id="Project" className="main-container background-light border-blue">
      <p className={"bold-text"}>Mina projekt</p>
      {projects.flatMap((project) => (
        <Project
          title={project.title}
          description={project.description}
          img={project.img}
          linktogit={project.linktogit}
        ></Project>
      ))}
    </div>
  );
};

export default ProjectsPage;
