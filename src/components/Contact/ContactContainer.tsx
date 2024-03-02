import ContactForm from "./ContactForm";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img from "../../assets/project-card.png";

const ContactContainer = () => {
  return (
    <main id="Contact" className="container-contact">
      <div className="contact-row">
        <div className="con">
          {/*  <img src={img} alt="" /> */}
          <div className="info">
            <h1>Kontakta mig</h1>
            <p>Fyll i formuläret eller kontakta mig på LinkedIn</p>
          </div>

          <div className="icons">
            <a
              className={"link-desktop"}
              href="https://www.linkedin.com/in/isabellaes"
            >
              <LinkedInIcon
                sx={{ fontSize: 30, color: "#320a41" }}
              ></LinkedInIcon>
            </a>
            <a className={"link-desktop"} href=" https://github.com/isabellaes">
              <GitHubIcon sx={{ fontSize: 30, color: "#320a41" }}></GitHubIcon>
            </a>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
    </main>
  );
};

export default ContactContainer;
