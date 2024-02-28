import image from "../assets/profilbild.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { skills } from "../utils/data";

const AboutPage = () => {
  return (
    <div className="container-about">
      <h1>
        Om <span className="color-purple">mig</span>
      </h1>
      <section className="box-column">
        <section>
          <img src={image} alt="portrait"></img>
          <div className="info-box">
            <h3>Isabella Ekdahl Sahlberg</h3>
            <p>32 år, Borås</p>
            <h3> Vad är det som driver mig? </h3>
            <p>
              Jag är en person som alltid tyckt om problemlösning och mår som
              bäst när jag får använda min analytiska förmåga till att lösa
              svåra uppgifter och komplex logik. När jag programmerar stöter jag
              på just den typ av utmaningar som motiverar mig. Jag får också
              utmana min kreativa sida, genom att pussla ihop alla dessa olika
              delar till en helhet.
            </p>
            <h3>Vad intresserar mig?</h3>
            <p>
              Jag började med att lära mig backend. Det var både roligt och
              utmanande. Under min utbildning till systemutvecklare, fick jag
              även en inblick i frontend. Det väckte mitt intresse väldigt
              snabbt. Både app- och webbutveckling var en av de roligaste
              delarna med utbildningen. Det fick mig att, efter examen, söka mig
              in till frontendutvecklare.
            </p>
            <h3>Mina mål </h3>
            <p>
              Jag vill jobba som fullstackutvecklare, med fokus på frontend. Det
              viktigaste för mig är att hitta en arbetsplats där jag får lov att
              växa och utvecklas, både professionellt och personligt.
            </p>

            <a
              className={"link-desktop"}
              href="https://www.linkedin.com/in/isabellaes"
            >
              <LinkedInIcon
                sx={{ fontSize: 30, color: "#4e3071" }}
              ></LinkedInIcon>
            </a>
            <a className={"link-desktop"} href=" https://github.com/isabellaes">
              <GitHubIcon sx={{ fontSize: 30, color: "#4e3071" }}></GitHubIcon>
            </a>
          </div>

        </section>
      </section>
      <section className="box-column">
        <section>
          <h3>Utbildningar</h3>

          <p>Borås Yrkeshögskola</p>
          <p className="italic">Frontendutvecklare, React - Nuvarande</p>
          <p className="italic">Systemutvecklare .Net - Examen 06/23</p>
        </section>
        <section>
          <h3>Stack</h3>
          <Stack spacing={0.5} direction="row" useFlexGap flexWrap="wrap">
            {skills.map((x) => (
              <Chip
                label={x}
                variant="outlined"
                key={x}
                sx={{ marginInline: "0.5em", color: "#320a41" }}
              ></Chip>
            ))}
          </Stack>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
