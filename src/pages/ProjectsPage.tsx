import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import { projects } from "../utils/data";
import Project from "../components/Project";
import { idText } from "typescript";
const ProjectsPage = () => {
  return (
    <div id="Project" className="main-container">
      <p className={"bold-text"}>Mina projekt</p>
      <a href="#module1">
        <div className="card">PROJEKT 1</div>
      </a>
      <a href="#module2">
        <div className="card">PROJEKT 2</div>
      </a>
      <a href="#module3">
        <div className="card">PROJEKT 3</div>
      </a>

      <div id="module1" className="module">
        <Project
          title={projects[0].title}
          description={projects[0].description}
          img={projects[0].img}
          linktogit={projects[0].linktogit}
        ></Project>
      </div>
      <div id="module2" className="module">
        <Project
          title={projects[1].title}
          description={projects[1].description}
          img={projects[1].img}
          linktogit={projects[1].linktogit}
        ></Project>
      </div>
      <div id="module3" className="module">
        <Project
          title={projects[2].title}
          description={projects[2].description}
          img={projects[2].img}
          linktogit={projects[2].linktogit}
        ></Project>
      </div>

      {/*       {projects.flatMap((project) => (
        <Project
          title={project.title}
          description={project.description}
          img={project.img}
          linktogit={project.linktogit}
        ></Project>
      ))} */}
    </div>
  );
};

export default ProjectsPage;
