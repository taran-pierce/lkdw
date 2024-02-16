import {
  Fira_Sans,
  Rubik_Doodle_Shadow,
 } from "next/font/google";

 const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-firaSans"
});

const rubikDoodleShadow = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubikDoodle",
});

export {
  fira,
  rubikDoodleShadow,
};
