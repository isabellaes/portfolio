import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";

const ContactPage = () => {
  return (
    <Container>
      <Paper>
        <NavBar></NavBar>
        <div className={"container-2"}>
          <p className={"bold-text"}>Kontakta mig</p>
          <a href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/">
            <p>LinkedIn</p>
          </a>
          <a href=" https://github.com/isabellaes?tab=repositories">
            <p>Github</p>
          </a>
        </div>
      </Paper>
    </Container>
  );
};

export default ContactPage;
