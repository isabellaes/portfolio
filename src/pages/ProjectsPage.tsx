import { Button } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/style.css";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { useState } from "react";
import { project1, project2, project } from "../utils/data";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  const [project, setProject] = useState<project>(project1);

  function handleOnChange(value: string) {
    if (value === project2.title) {
      setProject(project2);
    } else if (value === project1.title && project.title !== value) {
      setProject(project1);
    }
  }

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="main-row-100">
        <div className="aside-10"></div>
        <div className="main-column-80">
          <div className="main-row">
            <div className="box-column-50">
              <p className={"bold-text"}>Mina projekt</p>

              <Button
                className="button"
                onClick={() => handleOnChange("Examensarbete")}
              >
                Examensarbete
              </Button>
              <Button
                className="button"
                onClick={() => handleOnChange("Portfolio")}
              >
                Portfolio
              </Button>
              <a
                className={"link-desktop"}
                href=" https://github.com/isabellaes?tab=repositories"
              >
                <GitHubIcon></GitHubIcon> Github
              </a>
            </div>
            <div className="box-column-50">
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
