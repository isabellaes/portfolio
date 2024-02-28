import { Link } from "react-router-dom";
import image from "../assets/Namnlös-3.png";

const HomePage = () => {
  return (
    <main className={"container-home"}>
      <section className="content-home">
        <div>
          <h1>FRONTENDUTVECKLARE</h1>
          <h1>
            <span className="color-purple">STUDENT</span>
          </h1>
          <p>React - Javascript - Typescript - Sass</p>
          <Link to="Contact" className="contact-button">
            Kontakta mig
          </Link>
        </div>
        <img src={image} alt="avatar"></img>
      </section>
    </main>
  );
};

export default HomePage;
