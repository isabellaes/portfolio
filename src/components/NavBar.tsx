import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={"Nav-Bar-Box"}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <p className={"Link"}>Hem</p>
      </NavLink>
      {/*  <NavLink to="/about" style={{ textDecoration: "none" }}>
        <Typography className={"Link"}>About</Typography>
      </NavLink> */}
      <NavLink to="/projects" style={{ textDecoration: "none" }}>
        <p className={"Link"}>Projekt</p>
      </NavLink>
    </Box>
  );
};

export default NavBar;

{
  /*    <AppBar position="static" style={{ backgroundColor: "#cea7fa" }}>
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Typography className={"Link"}>Home</Typography>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Typography className={"Link"}>About</Typography>
          </NavLink>
          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            <Typography className={"Link"}>Projects</Typography>
          </NavLink>
          <Outlet />
        </Toolbar>
      </AppBar> */
}
