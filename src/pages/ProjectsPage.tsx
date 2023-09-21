import { Button, Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
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
    }
  }

  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container-projects"}>
          <div className={"menu-container"}>
            <p className={"bold-text"}>Mina projekt</p>
            <Button onClick={() => handleOnChange("Examensarbete")}>
              Examensarbete
            </Button>
            <Button onClick={() => handleOnChange("Portfolio")}>
              Portfolio
            </Button>
            <br />
            <br />
            <a href=" https://github.com/isabellaes?tab=repositories">
              <GitHubIcon></GitHubIcon> Github
            </a>
          </div>
          <div className={"content-container"}>
            <Project
              title={project.title}
              description={project.description}
              linktogit={project.linktogit}
              img={project.img}
            ></Project>
          </div>
        </div>

        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default ProjectsPage;
