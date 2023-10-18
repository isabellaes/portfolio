import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={"main-container background-gradient"}>
      <div className="main-column-80">
        <div className="content-home">
          <h1>Hi, I'm Isabella.</h1>
          <p className="home">Frontendutvecklare, React</p>
          <p className="home">Systemutvecklare .Net </p>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <p className={"contact-button"}>Kontakta mig</p>
          </NavLink>
        </div>
        <div className="content-home-img">
          {/*   <img src={image} alt="portrait" className={"img-portrait-desktop"} /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
