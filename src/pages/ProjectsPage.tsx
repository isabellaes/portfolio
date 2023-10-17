import NavBar from "../components/NavBar";
import "../style/style.css";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { useState } from "react";
import {
  projectExarbete,
  projectExpress,
  projectBlog,
  project,
} from "../utils/data";
import "../style/mobile.css";
import "../style/tablet.css";
const ProjectsPage = () => {
  const [project, setProject] = useState<project>(projectExarbete);

  function handleOnChange(value: string) {
    if (value === projectExpress.title) {
      setProject(projectExpress);
    } else if (value === projectExarbete.title && project.title !== value) {
      setProject(projectExarbete);
    } else if (value === projectBlog.title && project.title !== value) {
      setProject(projectBlog);
    }
  }

  return (
    <div className="main-row">
      <div className="box-column-30">
        <p className={"bold-text"}>Mina projekt</p>

        <button
          className="button"
          onClick={() => handleOnChange("Examensarbete")}
        >
          &gt; Examensarbete
        </button>

        <button
          className="button"
          onClick={() => handleOnChange("Express-API")}
        >
          &gt; Express-API
        </button>
        <button className="button" onClick={() => handleOnChange("Blogg")}>
          &gt; Blogg
        </button>
      </div>
      <div className="box-column-70">
        <Project
          title={project.title}
          description={project.description}
          linktogit={project.linktogit}
          img={project.img}
        ></Project>
      </div>
    </div>
  );
};

export default ProjectsPage;
