import { Container, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import start from "../assets/Start.png";
import meditation from "../assets/meditation.png";
import dagbok from "../assets/dagbok.png";
import dailynote from "../assets/Kommaihåg.png";
import moodtracker from "../assets/moodtracker.png";

const ProjectsPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className="container-2">
          <div className="div2">
            <p className={"bold-text"}>Examensarbete</p>
            <p>
              Never Alone is an app for people with mental illness, or people
              who just want to write down daily notes, track their moods or do
              some meditations. The idea for this app came from our own history
              with mental illness and the fact that this is a problem so many
              people struggle with. Me and my classmate Eva-Li worked with this
              app for a couple of months and we started out with a simple plan
              that came to grow during time. Our App contains several methods
              for taking care of your mental health and getting access to help
              from psychiatric care or helplines. This project is very important
              to us, and we hope it can be something that can help others in the
              future.
            </p>
            <a href="https://github.com/isabellaes/Never-alone">
              <p>Länk till Github Projektet</p>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={start} alt="Bild på startsida" className=" img-app" />
          <img src={meditation} alt="Bild på startsida" className=" img-app" />
          <img src={dagbok} alt="Bild på startsida" className=" img-app" />
          <img src={dailynote} alt="Bild på startsida" className=" img-app" />
          <img src={moodtracker} alt="Bild på startsida" className=" img-app" />
        </div>
      </Paper>
    </Container>
  );
};

export default ProjectsPage;
