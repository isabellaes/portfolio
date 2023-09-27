import { Box } from "@mui/material";
import "../style/mobile.css";
import "../style/layout.css";
import "../style/tablet.css";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { project } from "../utils/data";

const Project = (props: project) => {
  const [image, setImage] = useState(props.img[0]);

  function handleClickForward() {
    const index = props.img.indexOf(image) + 1;
    if (props.img[index] != null) {
      setImage(props.img[index]);
    } else {
      setImage(props.img[0]);
    }
  }
  function handleClickBack() {
    const index = props.img.indexOf(image) - 1;
    if (props.img[index] != null) {
      setImage(props.img[index]);
    } else {
      const lastIndex = props.img.length - 1;
      setImage(props.img[lastIndex]);
    }
  }
  return (
    <Box>
      <div className={"container-project-column"}>
        <p className={"bold-text"}>{props.title}</p>
        <p>{props.description}</p>
        <a href={props.linktogit}>
          <p>Länk till Github Projektet</p>
        </a>
      </div>

      <div className={"container-projects-row"}>
        <IconButton
          onClick={handleClickBack}
          style={{ textDecoration: "none" }}
          disableRipple={true}
        >
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </IconButton>
        <img src={image} alt="project" className="img-app" />

        <IconButton
          onClick={handleClickForward}
          style={{ textDecoration: "none" }}
          disableRipple={true}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
    </Box>
  );
};

export default Project;
