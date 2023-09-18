import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>

        <div className={"container-projects"}>
          <div className={"menu-container"}>
            <p className={"bold-text"}>Kontakta mig</p>

            <a href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/">
              <LinkedInIcon></LinkedInIcon> LinkedIn
            </a>
          </div>
          <div className={"content-container"}>
            <ContactForm></ContactForm>
            <br />
          </div>
        </div>

        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default ContactPage;
