import NavBar from "../components/NavBar";
import "../style/style.css";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { useState } from "react";
import { project1, project2, project3, project } from "../utils/data";
import "../style/mobile.css";
import "../style/tablet.css";
const ProjectsPage = () => {
  const [project, setProject] = useState<project>(project1);

  function handleOnChange(value: string) {
    if (value === project2.title) {
      setProject(project2);
    } else if (value === project1.title && project.title !== value) {
      setProject(project1);
    } else if (value === project3.title && project.title !== value) {
      setProject(project3);
    }
  }

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="main-row-100">
        <div className="aside-10"></div>
        <div className="main-column-80">
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
          <Footer></Footer>
        </div>
        <div className="aside-10"></div>
      </div>
    </div>
  );
};

export default ProjectsPage;
