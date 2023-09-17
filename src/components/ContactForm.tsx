import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../style/pagelayout.css";

const ContactForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={"form-container"}>
      <TextField
        id="outlined-basic"
        label="Namn"
        variant="outlined"
        style={{ margin: "10px" }}
      />
      <TextField
        id="outlined-basic"
        label="E-post"
        variant="outlined"
        style={{ margin: "10px" }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Meddelande"
        multiline
        rows={4}
        style={{ margin: "10px" }}
      />
      <Button
        variant="contained"
        style={{ width: "fit-content", margin: "10px" }}
      >
        Skicka
      </Button>
    </Box>
  );
};

export default ContactForm;
