import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import image from "../assets/porträtt.jpg";

const AboutPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container"}>
          <div className={"div1"}>
            <img src={image} alt="portrait" className={"img-portrait"} />
            <p className={"bold-text"}>Isabella Ekdahl Sahlberg</p>
            <p>Frontendutvecklare, React - Student Examen 2025</p>
            <p>Systemutvecklare .Net - Examen 2023</p>
          </div>
          <div className={"div1"}>
            <p className={"bold-text"}>Om mig</p>
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
      </Paper>
    </Container>
  );
};

export default AboutPage;
