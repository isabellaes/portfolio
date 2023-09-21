import { Box } from "@mui/material";
import Exarbete from "../assets/Start.png";
import Exarbete2 from "../assets/moodtracker.png";
import Exarbete3 from "../assets/meditation.png";
import "../style/layout.css";
import "../style/project.css";

interface props {
  title: string;
  description: string;
  linktogit?: string;
  img?: string;
}
const Project = (props: props) => {
  return (
    <Box>
      <div className={"container-project-column"}>
        <p className={"bold-text"}>{props.title}</p>
        <p>{props.description}</p>
        <a href={props.linktogit}>
          <p>Länk till Github Projektet</p>
        </a>
      </div>

      {props.img ? (
        <div className={"container-projects-row"}>
          <img src={Exarbete} alt="Bild på startsida" className={"img-app"} />
          <img src={Exarbete2} alt="Bild på startsida" className={"img-app"} />
          <img src={Exarbete3} alt="Bild på startsida" className={"img-app"} />
        </div>
      ) : (
        <p></p>
      )}
    </Box>
  );
};

export default Project;
