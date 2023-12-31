import TextField from "@mui/material/TextField";
import "../style/mobile.css";
import "../style/style.css";
import "../style/tablet.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();

    const emailmessage = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_0zqihxk",
        "template_mr474fg",
        emailmessage,
        "5KAAPu8vXIV-IniE2"
      )
      .then(() => setLoading(false))
      .then(
        (result) => {
          // show the user a success message

          alert("Ditt meddelande är nu skickat!");
        },
        (error) => {
          // show the user an error
          alert("Någonting gick fel. Försök igen!");
        }
      );
  };
  return (
    <form
      onSubmit={(e) => {
        e.currentTarget.reset();
        sendEmail(e);
      }}
      className={"form-container"}
    >
      {loading ? <CircularProgress /> : <p></p>}
      <TextField
        required
        id="outlined-basic"
        label="Namn"
        variant="filled"
        style={{ marginBottom: "1em" }}
        className={"TextField"}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        id="outlined-basic"
        variant="filled"
        label="E-post"
        style={{ marginBottom: "1em" }}
        className={"TextField"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        id="outlined-multiline-static"
        variant="filled"
        label="Meddelande"
        multiline
        rows={4}
        style={{ marginBottom: "1em" }}
        className={"TextField"}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="contact-button-2">Skicka</button>
    </form>
  );
};

export default ContactForm;
