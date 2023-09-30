import "../style/style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/mobile.css";
import "../style/tablet.css";
import { NavLink } from "react-router-dom";
import image from "../assets/profilbild.jpg";

const HomePage = () => {
  return (
    <div className={"container-home"}>
      <NavBar></NavBar>
      <div className="main-row">
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

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
