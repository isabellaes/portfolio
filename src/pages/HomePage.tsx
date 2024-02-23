import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className={"container-home"}>
      <section className="content-home">
        <h1>
          Hi, I'm
          <span className="color-purple"> Isabella.</span>
        </h1>
        <p>Webbutvecklare</p>

        <Link to="Contact" className="contact-button">
          Kontakta mig
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
