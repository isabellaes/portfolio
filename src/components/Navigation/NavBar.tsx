import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [menu, showMenu] = useState<boolean>(false);
  function handleOnClick() {
    showMenu(!menu);
  }

  return (
    <header>
      <div className="main-row">
        <div className="Nav-Bar-Box-left">
          <p className={"Link color-purple"}>Isabella ES</p>
        </div>
        <div className="Nav-Bar-Box-right">
          <ScrollLink
            to="Home"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Hem
          </ScrollLink>
          <ScrollLink
            to="About"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Om
          </ScrollLink>

          <ScrollLink
            to="Project"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Projekt
          </ScrollLink>
          <ScrollLink
            to="Contact"
            className="Link"
            style={{ textDecoration: "none" }}
          >
            Kontakt
          </ScrollLink>
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
          <ScrollLink
            to="Home"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Hem</p>
          </ScrollLink>

          <ScrollLink
            to="About"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Om</p>
          </ScrollLink>

          <ScrollLink
            to="Project"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Projekt</p>
          </ScrollLink>

          <ScrollLink
            to="Contact"
            style={{ textDecoration: "none" }}
            onClick={() => showMenu(false)}
          >
            <p className={"Link-drop-down"}>Kontakt</p>
          </ScrollLink>
        </div>
      ) : (
        <p></p>
      )}
    </header>
  );
};

export default NavBar;
