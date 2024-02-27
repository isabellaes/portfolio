import { Link } from "react-router-dom";
import image from "../assets/test1.png";

const HomePage = () => {
  return (
    <main className={"container-home"}>
      <section className="content-home">
        <img src={image}></img>
        <h1>
          <span className="color-purple">FRONTENDUTVECKLARE </span>
        </h1>
        <h1>STUDENT</h1>
        <p>React - Javascript - Typescript - Sass</p>

        <Link to="Contact" className="contact-button">
          Kontakta mig
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
