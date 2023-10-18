import "../style/style.css";
import ContactForm from "../components/ContactForm";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../style/mobile.css";
import "../style/tablet.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactPage = () => {
  return (
    <div className="main-container">
      <div className="main-column-80">
        <div className="box-column-30">
          <p className={"bold-text"}>Kontakta mig</p>

          <a
            className={"link-desktop"}
            href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/"
          >
            <LinkedInIcon sx={{ fontSize: 50, color: "black" }}></LinkedInIcon>
          </a>
          <a
            className={"link-desktop"}
            href=" https://github.com/isabellaes?tab=repositories"
          >
            <GitHubIcon sx={{ fontSize: 45, color: "black" }}></GitHubIcon>
          </a>
        </div>

        <div className="box-column-70">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
