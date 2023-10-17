import "../style/style.css";
import ContactForm from "../components/ContactForm";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../style/mobile.css";
import "../style/tablet.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactPage = () => {
  return (
    <div className="main-container">
      <div className="main-row-100">
        <div className="aside-10"></div>
        <div className="main-column-80">
          <div className="main-row">
            <div className="box-column-30">
              <p className={"bold-text"}>Kontakta mig</p>

              <a
                className={"link-desktop"}
                href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a
                className={"link-desktop"}
                href=" https://github.com/isabellaes?tab=repositories"
              >
                <GitHubIcon></GitHubIcon>
              </a>
            </div>

            <div className="box-column-70">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
        <div className="aside-10"></div>
      </div>
    </div>
  );
};

export default ContactPage;
