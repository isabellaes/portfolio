import "../style/style.css";
import ContactForm from "../components/ContactForm";
import "../style/mobile.css";
import "../style/tablet.css";

const ContactPage = () => {
  return (
    <section id="Contact" className="main-container background-light">
      <p className={"bold-text"}>Kontakta mig</p>
      <ContactForm></ContactForm>
    </section>
  );
};

export default ContactPage;
