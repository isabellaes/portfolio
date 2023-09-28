import { Box } from "@mui/material";
import "../style/style.css";
import "../style/tablet.css";
import "../style/mobile.css";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={"footer"}>
      <p className={"padding-left"}>&copy; Isabella Ekdahl Sahlberg</p>
    </Box>
  );
};

export default Footer;
