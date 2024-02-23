import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section id="Contact" className="main-container">
      <p className={"bold-text"}>
        <span className="color-blue">Kontakta </span>mig
      </p>
      <ContactForm></ContactForm>
    </section>
  );
};

export default ContactPage;
