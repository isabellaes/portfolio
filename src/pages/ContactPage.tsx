import NavBar from "../components/NavBar";
import "../style/style.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="main-row-100">
        <div className="aside-10"></div>
        <div className="main-column-80">
          <div className="main-row">
            <div className="box-column-50">
              <p className={"bold-text"}>Kontakta mig</p>

              <a
                className={"link-desktop"}
                href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/"
              >
                <LinkedInIcon></LinkedInIcon> LinkedIn
              </a>
            </div>
            <div className="box-column-50">
              <ContactForm></ContactForm>
            </div>
          </div>
          <Footer></Footer>
        </div>
        <div className="aside-10"></div>
      </div>
    </div>
  );
};

export default ContactPage;
