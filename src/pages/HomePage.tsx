import { Link } from "react-router-dom";

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
          <p>Systemutvecklare .Net</p>

          <Link to="Contact" className="contact-button">
            Kontakta mig
          </Link>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
