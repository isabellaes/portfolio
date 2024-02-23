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
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw" }}>
      <div className="main-row-100-black">
        <div className="Nav-Bar-Box-left">
          <p className={"Link color-blue"}>Isabella</p>
        </div>
        <div className="Nav-Bar-Box-right">
          <Link to="/" className="Link">
            Hem
          </Link>
          <p className="Link-p">|</p>
          <Link to="About" className="Link">
            Om
          </Link>
          <p className="Link-p">|</p>
          <Link to="Skills" className="Link">
            Erfarenheter
          </Link>
          <p className="Link-p">|</p>
          <Link to="Projects" className="Link">
            Projekt
          </Link>
          <p className="Link-p">|</p>
          <Link to="Contact" className="Link">
            Kontakt
          </Link>

          <div className="mobile-navbar">
            <IconButton aria-label="menu" onClick={handleOnClick}>
              <MenuIcon
                className="menu-icon"
                sx={{ fontSize: "1.2em" }}
              ></MenuIcon>
            </IconButton>
          </div>
        </div>
      </div>
      {menu ? (
        <div className="drop-down-menu">
          <Link
            to="Home"
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
            to="Skills"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Erfarenheter</p>
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
    </Box>
  );
};

export default NavBar;
