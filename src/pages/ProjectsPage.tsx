import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import { projects } from "../utils/data";
import Project from "../components/Project";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectsPage = () => {
  return (
    <div id="Project" className="main-container">
      <p className={"bold-text"}>Mina projekt</p>
      <div className="flex-row">
        {projects.flatMap((project) => (
          <div className="card">
            <h6>{project.title}</h6>
            <p>{project.description}</p>
            <a className={"link-desktop"} href={project.linktogit}>
              <GitHubIcon sx={{ fontSize: 30, color: "#4e85ee" }}></GitHubIcon>
            </a>
            <a className="mobile" href={`#${project.title}`}>
              Bilder
            </a>
          </div>
        ))}
      </div>

      {projects.flatMap((project) => (
        <div id={project.title} className="module">
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

export default ProjectsPage;
