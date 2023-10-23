import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = () => {
  const [menu, showMenu] = useState<boolean>(false);
  function handleOnClick() {
    if (menu === false) {
      showMenu(true);
    } else if (menu === true) {
      showMenu(false);
    }
  }
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw" }}>
      <div className="main-row-100-black">
        <div className="Nav-Bar-Box-right">
          <p className={"Link"}>I E S</p>
        </div>
        <div className="Nav-Bar-Box">
          <Link to="Home" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Hem</p>
          </Link>
          <p className="Link-p">|</p>
          <Link to="About" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Om</p>
          </Link>
          <p className="Link-p">|</p>
          <Link to="Project" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Projekt</p>
          </Link>
          <p className="Link-p">|</p>
          <Link to="Contact" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Kontakt</p>
          </Link>

          <div className="mobile-navbar">
            <IconButton aria-label="menu" onClick={handleOnClick}>
              <MenuIcon
                className="menu-icon"
                sx={{ fontSize: "1.5em" }}
              ></MenuIcon>
            </IconButton>
          </div>
        </div>
      </div>
      {menu ? (
        <div className="drop-down-menu">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Hem</p>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Om</p>
          </Link>

          <Link to="/projects" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Projekt</p>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Kontakt</p>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

export default NavBar;
