import ContactForm from "../components/ContactForm";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  return (
    <main className="container-contact">
      <h1>
        <span className="color-purple">Kontakta </span>mig
      </h1>
      <div className="contact-row">
        <div className="con">
          <a
            className={"link-desktop"}
            href="https://www.linkedin.com/in/isabellaes"
          >
            <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }}></LinkedInIcon>
          </a>
          <a className={"link-desktop"} href=" https://github.com/isabellaes">
            <GitHubIcon sx={{ fontSize: 30, color: "#fff" }}></GitHubIcon>
          </a>
        </div>
        <ContactForm></ContactForm>
      </div>
    </main>
  );
};

export default ContactPage;
