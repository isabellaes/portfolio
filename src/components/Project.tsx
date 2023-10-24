import { Box } from "@mui/material";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { project } from "../utils/data";
import GitHubIcon from "@mui/icons-material/GitHub";

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

      if (props.img[index] !== undefined) {
        setImage(props.img[index]);
      } else {
        const lastIndex = props.img.length - 1;
        setImage(props.img[lastIndex]);
      }
    }
  }
  return (
    <Box>
      <div className={"container-project-column"}>
        <h6>{props.title}</h6>
        <p>Klicka på ikonen för att se projektet på github.</p>
        <a className={"link-desktop"} href={props.linktogit}>
          <GitHubIcon sx={{ fontSize: 30, color: "#4e85ee" }}></GitHubIcon>
        </a>
      </div>

      <div className={"container-projects-row"}>
        <IconButton
          onClick={handleClickBack}
          style={{ textDecoration: "none", color: "#4e85ee" }}
          disableRipple={true}
        >
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </IconButton>
        <img src={image} alt="project" className={"img-tabletmobile"} />
        <img src={image} alt="project" className={"img-desktop"} />

        <IconButton
          onClick={handleClickForward}
          style={{ textDecoration: "none", color: "#4e85ee" }}
          disableRipple={true}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
      </div>
    </Box>
  );
};

export default Project;
