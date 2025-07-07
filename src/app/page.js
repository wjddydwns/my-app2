import Image from "next/image";
import IntroPage from "./page/IntroPage/IntroPage";
import Background from "./page/IntroPage/background/Background";
import About from "./page/about/About";
import {ProjectPage} from "./page/ProjectPage/ProjectPage";
import { SKILL } from "./page/Skill/Skill";

export default function Home() {
  return (
    <>
        <IntroPage />
        <About/>
        <SKILL/>
        <ProjectPage/>
    </>
  )
}

