import { Box, IconButton } from "@mui/material";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Events, Link, scrollSpy } from "react-scroll";

const NavBar = () => {
  const [menu, showMenu] = useState<boolean>(false);
  function handleOnClick() {
    if (menu === false) {
      showMenu(true);
    } else if (menu === true) {
      showMenu(false);
    }
  }

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw" }}>
      <div className="main-row-100-black">
        <div className="Nav-Bar-Box-left">
          <p className={"Link color-blue"}>Isabella</p>
        </div>
        <div className="Nav-Bar-Box-right">
          <Link
            to="Home"
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className="Link"
          >
            Hem
          </Link>
          <p className="Link-p">|</p>
          <Link
            to="About"
            className="Link"
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Om
          </Link>
          <p className="Link-p">|</p>
          <Link
            to="Skills"
            className="Link"
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Erfarenheter
          </Link>
          <p className="Link-p">|</p>
          <Link
            to="Project"
            className="Link"
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Projekt
          </Link>
          <p className="Link-p">|</p>
          <Link
            to="Contact"
            className="Link"
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
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
            to="HOme"
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
            to="Project"
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
