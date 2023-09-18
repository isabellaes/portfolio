import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import image from "../assets/porträtt.jpg";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container-projects"}>
          <div className={"menu-container"}>
            <p className={"bold-text"}>Om mig</p>
            <p style={{ fontStyle: "italic" }}>Bra på problemlösning</p>

            <p style={{ fontStyle: "italic" }}>
              Nyfiken på att lära mig nya saker
            </p>

            <p style={{ fontStyle: "italic" }}>Ansvarstagande</p>
          </div>
          <div className={"content-container"}>
            <div className="container-projects">
              <img src={image} alt="portrait" className={"img-portrait"} />
            </div>

            <p className={"bold-text"}>Isabella</p>
            <p>
              Jag är utbildad systemutvecklare och studerar nu till
              frontendutvecklare React. Mitt intresse för programmering började
              ganska tidigt när jag i ungdomen höll på en del med css och html.
              Jag har altid tyckt om problemlösning och matematik. Jag började
              studera till systemutvecklare hösten 2021 och läste då mestadels
              C# och .Net Jag fastnade direkt för programmering. Det bästa med
              programmeringen är att lösa problem och att få skapa nya saker.
              Jag tycker också om att lära mig nya saker och det är något jag
              alltid får utforska inom it.
            </p>
            <p className={"bold-text"}>Tech stack</p>
            <ul>
              <li>
                <p>C# .Net</p>
              </li>
              <li>
                <p>React, React Native, Expo, Express</p>
              </li>
              <li>
                <p>Typescript</p>
              </li>
              <li>
                <p>Javascript</p>
              </li>
              <li>
                <p>HTML CSS</p>
              </li>
              <li>
                <p>SQL</p>
              </li>
            </ul>
          </div>
        </div>

        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default AboutPage;
