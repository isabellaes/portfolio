import { Box } from "@mui/material";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { project } from "../utils/data";

const Project = (props: project) => {
  const [image, setImage] = useState<string>();
  useEffect(() => {
    if (props.img) {
      setImage(props.img[0]);
    }
  }, [setImage, props.img]);
  function handleClickForward() {
    if (props.img && image !== undefined) {
      const index = props.img.indexOf(image) + 1;
      console.log(props.img[index]);
      console.log(index);
      if (props.img[index] !== undefined) {
        setImage(props.img[index]);
      } else {
        setImage(props.img[0]);
      }
    }
  }
  function handleClickBack() {
    if (props.img && image !== undefined) {
      const index = props.img.indexOf(image) - 1;
      console.log(index);
      if (props.img[index] !== undefined) {
        setImage(props.img[index]);
      } else {
        const lastIndex = props.img.length - 1;
        console.log(lastIndex);
        setImage(props.img[lastIndex]);
      }
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
      {props.img ? (
        <div className={"container-projects-row"}>
          <IconButton
            onClick={handleClickBack}
            style={{ textDecoration: "none" }}
            disableRipple={true}
          >
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </IconButton>
          <img src={image} alt="project" className={"img-tabletmobile"} />
          <img src={image} alt="project" className={"img-desktop"} />

          <IconButton
            onClick={handleClickForward}
            style={{ textDecoration: "none" }}
            disableRipple={true}
          >
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </IconButton>
        </div>
      ) : (
        <p>Inga bilder</p>
      )}
    </Box>
  );
};

export default Project;
