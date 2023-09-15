import { Typography, AppBar, Box, Toolbar } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#cea7fa" }}>
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
      </AppBar>
    </Box>
  );
};

export default NavBar;
