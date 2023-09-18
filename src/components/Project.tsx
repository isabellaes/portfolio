import { Box } from "@mui/material";
import Exarbete from "../assets/Start.png";

interface props {
  title: string;
  description: string;
  linktogit?: string;
  img?: string;
}
const Project = (props: props) => {
  return (
    <Box>
      <div className={"container-2"}>
        <div className={"div2"}>
          <p className={"bold-text"}>{props.title}</p>
          <p>{props.description}</p>
          <a href={props.linktogit}>
            <p>Länk till Github Projektet</p>
          </a>
        </div>
      </div>

      {props.img ? (
        <div className={"container"}>
          <img src={Exarbete} alt="Bild på startsida" className={"img-app"} />
          <img src={Exarbete} alt="Bild på startsida" className={"img-app"} />
          <img src={Exarbete} alt="Bild på startsida" className={"img-app"} />
        </div>
      ) : (
        <p></p>
      )}
    </Box>
  );
};

export default Project;
