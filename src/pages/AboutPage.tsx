import { Container, Paper, Typography, Link } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import image from "../assets/porträtt.jpg";

const AboutPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className="container">
          <div className="div1">
            <img src={image} alt="portrait" className="img-portrait" />
            <Typography className="header-aboutme">
              Isabella Ekdahl Sahlberg
            </Typography>
            <Typography>
              Frontendutvecklare, React - Student Examen 2025
            </Typography>
            <Typography>Systemutvecklare .Net - Examen 2023</Typography>
            <Typography className="header-aboutme">Kontakta mig</Typography>
            <a href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/">
              <Typography>LinkedIn</Typography>
            </a>
            <a href=" https://github.com/isabellaes?tab=repositories">
              <Typography>Github</Typography>
            </a>
          </div>
          <div className="div2">
            <Typography className="header-aboutme">Om mig</Typography>
            <Typography>
              Jag är utbildad systemutvecklare och studerar nu till
              frontendutvecklare React. Mitt intresse för programmering började
              ganska tidigt när jag i ungdomen höll på en del med css och html.
              Jag har altid tyckt om problemlösning och matematik. Jag började
              studera till systemutvecklare hösten 2021 och läste då mestadels
              C# och .Net Jag fastnade direkt för programmering. Det bästa med
              programmeringen är att lösa problem och att få skapa nya saker.
              Jag tycker också om att lära mig nya saker och det är något jag
              alltid får utforska inom it.
            </Typography>
            <Typography className="header-aboutme header2">
              Tech stack
            </Typography>
            <ul>
              <li>
                <Typography>C# .Net</Typography>
              </li>
              <li>
                <Typography>React, React Native, Expo, Express</Typography>
              </li>
              <li>
                <Typography>Typescript</Typography>
              </li>
              <li>
                <Typography>Javascript</Typography>
              </li>
              <li>
                <Typography>HTML CSS</Typography>
              </li>
              <li>
                <Typography>SQL</Typography>
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default AboutPage;
