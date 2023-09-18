import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";
import "../style/pagelayout.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Form } from "react-router-dom";
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
        <TextField
          required
          id="outlined-basic"
          label="Namn"
          variant="outlined"
          style={{ margin: "10px", width: "15em" }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-basic"
          label="E-post"
          variant="outlined"
          style={{ margin: "10px", width: "15em" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Meddelande"
          multiline
          rows={4}
          style={{ margin: "10px", width: "15em" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" className="submit-button">
          Skicka
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;

/* import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactForm = () => {
  const form = useRef("");
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_0zqihxk",
        "Gmail",
        e.currentTarget,
        "5KAAPu8vXIV-IniE2"
      )
      .then(
        (result) => {
          // show the user a success message
          console.log("Sucess");
        },
        (error) => {
          // show the user an error
          console.log("Error");
        }
      );
  }; */
