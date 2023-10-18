import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import IconNavbar from "../assets/apple-touch-icon.png";
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
    <Box sx={{ flexGrow: 1 }}>
      <div className="main-row-100-black">
        <div className="Nav-Bar-Box-right">
          <p className={"Link"}>I E S</p>
        </div>
        <div className="Nav-Bar-Box">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Hem</p>
          </NavLink>
          <p className="Link-p">|</p>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Om</p>
          </NavLink>
          <p className="Link-p">|</p>
          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Projekt</p>
          </NavLink>
          <p className="Link-p">|</p>
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <p className={"Link"}>Kontakt</p>
          </NavLink>

          <div className="mobile-navbar">
            <IconButton aria-label="menu" onClick={handleOnClick}>
              <MenuIcon className="menu-icon"></MenuIcon>
            </IconButton>
          </div>
        </div>
      </div>
      {menu ? (
        <div className="drop-down-menu">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Hem</p>
          </NavLink>

          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Om</p>
          </NavLink>

          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Projekt</p>
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <p className={"Link-drop-down"}>Kontakt</p>
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

export default NavBar;
