import { Container, Paper } from "@mui/material";
import "../style/layout.css";
import NavBar from "../components/NavBar";
import background from "../assets/background2.jpg";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container"}>
          <div className={"sidebar"}>
            <p className={"bold-text"}>Isabella Ekdahl Sahlberg</p>
            <p>Frontendutvecklare, React - Student Examen 2025</p>
            <p>Systemutvecklare .Net - Examen 2023</p>
          </div>
          <div className={"content"}>
            <img
              src={background}
              alt="background"
              className={"img-background"}
            />
          </div>
        </div>

        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default HomePage;
