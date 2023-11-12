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
      <label htmlFor="name">
        <p>Namn</p>
      </label>
      <input
        id="name"
        type="text"
        placeholder="Namn"
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
      <label htmlFor="email">
        <p>Email</p>
      </label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      <label htmlFor="message">
        <p>Meddelande</p>
      </label>
      <textarea
        id="message"
        placeholder="Meddelande"
        onChange={(e) => setMessage(e.currentTarget.value)}
        required
      />

      <button type="submit" className="contact-button-2">
        Skicka
      </button>
    </form>
  );
};

export default ContactForm;
