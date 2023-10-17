import "../style/style.css";
import Footer from "../components/Footer";
import "../style/mobile.css";
import "../style/tablet.css";
import { NavLink } from "react-router-dom";
import image from "../assets/profilbild.jpg";
import ContactForm from "../components/ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";

const HomePage = () => {
  return (
    <div className={"container-home"}>
      <div className="main-row background-gradient">
        <div className="content-home">
          <img
            src={image}
            alt="portrait"
            className={"img-portrait-tabletmobile"}
          />
          <h1>Isabella Ekdahl Sahlberg</h1>
          <p className="home">
            Frontendutvecklare, React - Student Examen 2025
          </p>
          <p className="home">Systemutvecklare .Net - Examen 2023</p>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <p className={"contact-button"}>Kontakta mig</p>
          </NavLink>
        </div>
        <div className="content-home-img">
          <img src={image} alt="portrait" className={"img-portrait-desktop"} />
        </div>
      </div>
      <div className="main-row-100-black center">
        <div className="box-column-30">
          <h1>Kontakta mig</h1>
          <div className="row">
            <a
              className={"home-linkedin"}
              href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/"
            >
              <LinkedInIcon sx={{ fontSize: 60 }}></LinkedInIcon>
            </a>
            <a
              className={"home-linkedin"}
              href=" https://github.com/isabellaes?tab=repositories"
            >
              <GitHubIcon sx={{ fontSize: 60 }}></GitHubIcon>
            </a>
          </div>
        </div>
        <div className="box-column-30">
          <ContactForm></ContactForm>
        </div>
      </div>
      {/*   <div className="main-row-100-black">
        <AboutPage></AboutPage>
      </div> */}

      <div className="main-row background-gradient-reverse">
        <ProjectsPage></ProjectsPage>
      </div>
    </div>
  );
};

export default HomePage;
