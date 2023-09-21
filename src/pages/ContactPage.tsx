import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import "../style/layout.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>

        <div className={"container"}>
          <div className={"sidebar"}>
            <p className={"bold-text"}>Kontakta mig</p>

            <a href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/">
              <LinkedInIcon></LinkedInIcon> LinkedIn
            </a>
          </div>
          <div className={"content"}>
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
