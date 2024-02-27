import { projects } from "../utils/data";
import Project from "../components/Project";
import GitHubIcon from "@mui/icons-material/GitHub";
import cardImg from "../assets/project-card.png";
const ProjectsPage = () => {
  return (
    <div id="Project" className="container-projectpage">
      <h1>
        Mina <span className="color-purple">projekt</span>
      </h1>
      <div className="flex-row">
        {projects.flatMap((project) => (
          <div className="card" key={project.title}>
            <img src={cardImg} alt="" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className={"link-desktop"} href={project.linktogit}>
              <GitHubIcon sx={{ fontSize: 30, color: "#4e3071" }}></GitHubIcon>
            </a>
            <a className="mobile" href={`#${project.title}`}>
              Bilder
            </a>
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

export default ProjectsPage;
