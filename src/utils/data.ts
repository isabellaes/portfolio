import Exarbete from "../assets/Start.png";
import Exarbete2 from "../assets/moodtracker.png";
import Exarbete3 from "../assets/meditation.png";
import Exarbete4 from "../assets/Kommaihåg.png";
import Exarbete5 from "../assets/dagbok.png";
import solarisimg1 from "../assets/Skärmbild 2023-11-02 124709.png";
import solarisimg2 from "../assets/Skärmbild 2023-11-02 124733.png";
import bloggImg from "../assets/Skärmbild 2023-10-05 195010.png";

export interface project {
  title: string;
  description: string;
  linktogit: string;
  img: string[];
}

export const projects: project[] = [
  {
    title: "Blogg",
    description: "En enkel blogg byggd med React, Typescript, CSS, HTML",
    linktogit: "https://github.com/isabellaes/blog",
    img: [bloggImg],
  },
  {
    title: "Examensarbete",
    description: "App byggd med React native och Expo. Backend - C#.Net",
    linktogit: "https://github.com/isabellaes/Never-alone",
    img: [Exarbete, Exarbete2, Exarbete3, Exarbete4, Exarbete5],
  },
  {
    title: "Solaris",
    description: "En enkel hemsida byggd med vanilla javascript, html och css.",
    linktogit: "https://github.com/isabellaes/individuell-examination-solaris",
    img: [solarisimg1, solarisimg2],
  },
  /*  {
    title: "Webbshop",
    description: "Kommer snart",
    linktogit: "https://github.com/isabellaes/Webbshop",
    img: [],
  }, */
];

export const skills = [
  "C#",
  ".Net",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "SQL",
  "React",
  "React Native",
];
