import { Container, Paper } from "@mui/material";
import "../style/pagelayout.css";
import NavBar from "../components/NavBar";
import image from "../assets/porträtt.jpg";
import background from "../assets/background2.jpg";

const HomePage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container"}>
          <div className={"div3"}>
            <p className={"bold-text"}>Isabella</p>
            <p className={"bold-text"}>Ekdahl Sahlberg</p>
            <br />
            <p>Studerar till Frontendutvecklare React</p>
            <p>Utbildad Systemutvecklare .Net</p>
          </div>
          <div className={"div4"}>
            <img
              src={background}
              alt="background"
              className={"img-background"}
            />
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default HomePage;
