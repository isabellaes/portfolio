import { Button, Container, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import start from "../assets/Start.png";
import meditation from "../assets/meditation.png";
import dagbok from "../assets/dagbok.png";
import dailynote from "../assets/Kommaihåg.png";
import moodtracker from "../assets/moodtracker.png";
import Footer from "../components/Footer";
import Project from "../components/Project";
import "../utils/data";
import { useState } from "react";
import { project1, project2, project3 } from "../utils/data";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  interface project {
    title: string;
    description: string;
    linktogit?: string;
    img?: string;
  }
  const [project, setProject] = useState<project>(project1);

  function handleOnChange(value: string) {
    if (value === project1.title) {
      setProject(project1);
    } else if (value === project2.title) {
      setProject(project2);
    } else if (value === project3.title) {
      setProject(project3);
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
