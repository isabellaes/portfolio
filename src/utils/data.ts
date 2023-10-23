import Exarbete from "../assets/Start.png";
import Exarbete2 from "../assets/moodtracker.png";
import Exarbete3 from "../assets/meditation.png";
import Exarbete4 from "../assets/Kommaihåg.png";
import Exarbete5 from "../assets/dagbok.png";
import bloggImg from "../assets/Skärmbild 2023-10-05 195010.png";

export interface project {
  title: string;
  description: string;
  descriptionLong?: string;
  linktogit?: string;
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
    description: "Never Alone is an app for people with mental illness.",
    linktogit: "https://github.com/isabellaes/Never-alone",
    img: [Exarbete, Exarbete2, Exarbete3, Exarbete4, Exarbete5],
  },
];

/*   {
    title: "Examensarbete",
    description:
      "Never Alone is an app for people with mental illness, or people who just want to write down daily notes, track their moods or do some meditations. The idea for this app came from our own history with mental illness and the fact that this is a problem so many people struggle with.",
    linktogit: "https://github.com/isabellaes/Never-alone",
    img: [Exarbete, Exarbete2, Exarbete3, Exarbete4, Exarbete5],
  }, */
