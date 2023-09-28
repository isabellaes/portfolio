import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailmessage = {
      name: name,
      email: email,
      message: message,
    };
    console.log("test");

    emailjs
      .send(
        "service_0zqihxk",
        "template_mr474fg",
        emailmessage,
        "5KAAPu8vXIV-IniE2"
      )
      .then(
        (result) => {
          // show the user a success message
          alert("Meddelande skickat!");
          navigate("/contact");
        },
        (error) => {
          // show the user an error
          alert("Error");
          navigate("/contact");
        }
      );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={sendEmail} className={"form-container"}>
        <p className={"bold-text"}>Kontaktformulär</p>
        <TextField
          required
          id="outlined-basic"
          label="Namn"
          variant="outlined"
          style={{ marginBottom: "1em" }}
          className={"TextField"}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-basic"
          label="E-post"
          variant="outlined"
          style={{ marginBottom: "1em" }}
          className={"TextField"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Meddelande"
          multiline
          rows={4}
          style={{ marginBottom: "1em" }}
          className={"TextField"}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" className={"submit-button"}>
          Skicka
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
