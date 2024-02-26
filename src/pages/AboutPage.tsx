import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import image from "../assets/profilbild.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutPage = () => {
  return (
    <section id="About" className="main-container">
      <h1 className={"bold-text"}>
        Om <span className="color-blue">mig</span>
      </h1>
      <section className="box-column-50">
        <section>
          <img src={image} className="img-portrait" alt="portrait"></img>
          <h6>Isabella Ekdahl Sahlberg</h6>
          <p>32 år, Borås</p>
          <h6> Vad är det som driver mig? </h6>
          <p>
            Jag är en person som alltid tyckt om problemlösning och mår som bäst
            när jag får använda min analytiska förmåga till att lösa svåra
            uppgifter och komplex logik. När jag programmerar stöter jag på just
            den typ av utmaningar som motiverar mig. Jag får också utmana min
            kreativa sida, genom att pussla ihop alla dessa olika delar till en
            helhet.
          </p>
          <h6>Vad intresserar mig?</h6>
          <p>
            Jag började med att lära mig backend. Det var både roligt och
            utmanande. Under min utbildning till systemutvecklare, fick jag även
            en inblick i frontend. Det väckte mitt intresse väldigt snabbt. Både
            app- och webbutveckling var en av de roligaste delarna med
            utbildningen. Det fick mig att, efter examen, söka mig in till
            frontendutvecklare.
          </p>
          <h6>Mina mål </h6>
          <p>
            Jag vill jobba som fullstackutvecklare, med fokus på frontend. Det
            viktigaste för mig är att hitta en arbetsplats där jag får lov att
            växa och utvecklas, både professionellt och personligt.
          </p>

          <a
            className={"link-desktop"}
            href="https://www.linkedin.com/in/isabellaes/"
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
