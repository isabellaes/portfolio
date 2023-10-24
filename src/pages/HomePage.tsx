import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import { Link } from "react-scroll";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import SkillsPage from "./SkillsPage";

const HomePage = () => {
  return (
    <section>
      <section id="Home" className={"container-home"}>
        <section className="content-home">
          <h1>
            Hi, I'm
            <span className="color-blue"> Isabella.</span>
          </h1>
          <p>Frontendutvecklare, React - student</p>

          <Link to="Contact" className="contact-button">
            Kontakta mig
          </Link>
        </section>
      </section>
      <AboutPage></AboutPage>
      <SkillsPage></SkillsPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </section>
  );
};

export default HomePage;
