import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <header>
      <div className="main-row">
        <div className="Nav-Bar-Box-left">
          <p className={"Link color-purple"}>Frontendutvecklare, Isabella ES</p>
        </div>
        <div className="Nav-Bar-Box-right">
          <Link to="/" className="Link" style={{ textDecoration: "none" }}>
            Hem
          </Link>
          <Link to="About" className="Link" style={{ textDecoration: "none" }}>
            Om
          </Link>

          <Link
            to="Projects"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Projekt
          </Link>
          <Link
            to="Contact"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Kontakt
          </Link>
          <div className="mobile-navbar">
            <IconButton aria-label="menu" onClick={handleOnClick}>
              <MenuIcon
                className="menu-icon"
                sx={{ fontSize: "1.2em", color: "#000" }}
              ></MenuIcon>
            </IconButton>
          </div>
        </div>
      </div>
      {menu ? (
        <div className="drop-down-menu">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Hem</p>
          </Link>

          <Link
            to="About"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Om</p>
          </Link>

          <Link
            to="Projects"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Projekt</p>
          </Link>

          <Link
            to="Contact"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Kontakt</p>
          </Link>
        </div>
      ) : (
        <p></p>
      )}
    </header>
  );
};

export default NavBar;
