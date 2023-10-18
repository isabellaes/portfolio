import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import image from "../assets/profilbild.jpg";

const AboutPage = () => {
  return (
    <div className="main-container">
      <div className="main-column-80">
        <div className="box-column-50">
          <h1 className={"bold-text"}>Om mig</h1>
          <img src={image} className="img-portrait-desktop-about"></img>
          <img src={image} className="img-portrait-tabletmobile"></img>
          <h6>Namn:</h6>
          <p>Isabella Ekdahl Sahlberg</p>
          <h6>Ålder:</h6>
          <p>31</p>
          <h6>Familj:</h6>
          <p>Fru och två katter.</p>
          <h6>Bor:</h6>
          <p>Tullen, Borås</p>
          <h6>Intressen:</h6>
          <p>Programmering, kriminalserier, fotografering.</p>
          <h6>3 bästa egenskaper:</h6>
          <p>
            Bra på problemlösning och logiskt tänkande. Driven. Tycker om att
            lära mig nya saker.
          </p>
        </div>
        <div className="box-column-50">
          <p className={"bold-text"}>Bakgrund</p>
          <p>
            Tidigare har jag jobbat inom vård och omsorg, lokalvård samt butik.
            Jag är utbildad systemutvecklare, tog examen våren 2023 och studerar
            nu till frontendutvecklare React. Mitt intresse för programmering
            började ganska tidigt när jag i ungdomen höll på en del med css och
            html. Har alltid velat lära mig att bygga hemsidor men det tog några
            år innan jag sökte mig in till programmering. Jag har alltid tyckt
            om problemlösning och matematik. Jag började studera till
            systemutvecklare hösten 2021 och läste då mestadels C# och .Net. Det
            bästa med programmeringen är att lösa problem och att få skapa nya
            saker. Jag tycker också om att lära mig nya saker och det är något
            jag alltid får utforska inom programmering.
          </p>
          <p className={"bold-text"}>Tech stack</p>
          <ul>
            <li>
              <p>C# .Net</p>
            </li>
            <li>
              <p>React, React Native, Expo, Express</p>
            </li>
            <li>
              <p>Typescript</p>
            </li>
            <li>
              <p>Javascript</p>
            </li>
            <li>
              <p>HTML CSS</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

/*  <img src={image} alt="portrait" className={"img-portrait"} /> */
