import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import image from "../assets/profilbild.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutPage = () => {
  return (
    <section id="About" className="main-container">
      <h1 className={"bold-text"}>Om mig</h1>
      <section className="box-column-50">
        <section>
          <img src={image} className="img-portrait" alt="portrait"></img>

          <p>
            Jag heter Isabella Ekdahl Sahlberg. Jag är 31 år och bor i Borås
            tillsammans med min fru och våra två katter.
          </p>
          <p>
            Tidigare har jag jobbat inom vård och omsorg, lokalvård samt butik.
            Jag är utbildad systemutvecklare, tog examen våren 2023 och studerar
            nu till frontendutvecklare React. Mitt intresse för programmering
            började ganska tidigt när jag i ungdomen höll på en del med css och
            html. Har alltid velat lära mig att bygga hemsidor men det tog några
            år innan jag sökte mig in till programmering. Jag har alltid tyckt
            om problemlösning och matematik.
          </p>
          <p>
            Jag började studera till systemutvecklare hösten 2021 och läste då
            mestadels C# och .Net. Det bästa med programmeringen är att lösa
            problem och att få skapa nya saker. Jag tycker också om att lära mig
            nya saker och det är något jag alltid får utforska inom
            programmering.
          </p>
          <a
            className={"link-desktop"}
            href="https://www.linkedin.com/in/isabella-ekdahl-sahlberg-a99828220/"
          >
            <LinkedInIcon
              sx={{ fontSize: 30, color: "#4e85ee" }}
            ></LinkedInIcon>
          </a>
          <a
            className={"link-desktop"}
            href=" https://github.com/isabellaes?tab=repositories"
          >
            <GitHubIcon sx={{ fontSize: 30, color: "#4e85ee" }}></GitHubIcon>
          </a>
        </section>
      </section>
    </section>
  );
};

export default AboutPage;
