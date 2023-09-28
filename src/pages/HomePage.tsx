import "../style/style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/mobile.css";
import "../style/tablet.css";

const HomePage = () => {
  return (
    <div className={"container-home"}>
      <NavBar></NavBar>
      <div className="content-home">
        <h1>Isabella Ekdahl Sahlberg</h1>
        <p className="home">Frontendutvecklare, React - Student Examen 2025</p>
        <p className="home">Systemutvecklare .Net - Examen 2023</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
