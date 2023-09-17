import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/pagelayout.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactPage = () => {
  return (
    <Container>
      <Paper>
        <NavBar></NavBar>
        <div className={"container-2"}>
          <p className={"bold-text"}>Kontakta mig</p>

          <ContactForm></ContactForm>
        </div>
        <div className={"contact-links"}>
          <a href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/">
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href=" https://github.com/isabellaes?tab=repositories">
            <GitHubIcon></GitHubIcon>
          </a>
        </div>

        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default ContactPage;
