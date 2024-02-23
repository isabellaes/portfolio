import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={"footer"}>
      <p>Denna hemsida är byggd med React, Typescript, HTML och CSS.</p>
      <p>&copy; Isabella Ekdahl Sahlberg</p>
    </Box>
  );
};

export default Footer;
