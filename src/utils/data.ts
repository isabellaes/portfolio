import Exarbete from "../assets/Start.png";
import Exarbete2 from "../assets/moodtracker.png";
import Exarbete3 from "../assets/meditation.png";
import Exarbete4 from "../assets/Kommaihåg.png";
import Exarbete5 from "../assets/dagbok.png";
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
