import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={"Nav-Bar-Box"}>
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
    </Box>
  );
};

export default NavBar;
