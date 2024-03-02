import { Link } from "react-router-dom";
import image from "../../assets/Namnlös-3.png";
import ContactContainer from "../components/Contact/ContactContainer";
import ProjectsContainer from "../components/Project/ProjectContainer";
import NavBar from "../components/Navigation/NavBar";
import AboutContainer from "../components/About/AboutContainer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className={"container-home"}>
        <section id="Home" className="content-home">
          <div>
            <h1>FULLSTACKUTVECKLARE</h1>
            <h1>
              <span className="color-purple">Isabella</span>
            </h1>
            <p>React - Javascript - Typescript - .Net - C#</p>
            <Link to="Contact" className="contact-button">
              Kontakta mig
            </Link>
          </div>
          <img src={image} alt="avatar"></img>
        </section>
        <AboutContainer />
        <ProjectsContainer />
        <ContactContainer />
      </main>
    </>
  );
};

export default HomePage;
