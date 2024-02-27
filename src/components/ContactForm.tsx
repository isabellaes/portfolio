import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { SetStateAction, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

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
        () => {
          // show the user a success message
          alert("Ditt meddelande är nu skickat!");
        },
        () => {
          // show the user an error
          alert("Någonting gick fel. Försök igen!");
        }
      );
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateEmail(email) !== true) {
          setErrors("Format: email@mail.se");
        }
        if (validateEmail(email)) {
          setErrors("");
          sendEmail(e);
          e.currentTarget.reset();
        }
      }}
      className={"form-container"}
    >
      {loading ? <CircularProgress /> : <p></p>}
      <TextField
        required
        id="outlined-basic"
        label="Namn"
        style={{
          marginBottom: "1em",

          border: "1px solid black",
          borderRadius: "3px",
        }}
        className={"TextField"}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setName(e.target.value)
        }
      />

      <TextField
        required
        id="outlined-basic"
        label="E-post"
        style={{
          marginBottom: "1em",

          border: "1px solid black",
          borderRadius: "3px",
        }}
        className={"TextField"}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
      />
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <TextField
        required
        id="outlined-multiline-static"
        label="Meddelande"
        multiline
        rows={4}
        style={{
          marginBottom: "1em",
          border: "1px solid black",
          borderRadius: "3px",
        }}
        className={"TextField"}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setMessage(e.target.value)
        }
      />

      <button className="contact-button-2">Skicka</button>
    </form>
  );
};

export default ContactForm;
