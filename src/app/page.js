import IntroPage from "./page/IntroPage/IntroPage";
import About from "./page/about/About";
import {ProjectPage} from "./page/ProjectPage/ProjectPage";
import { LogoCarouselDemo } from "./page/Skill/Skill";
import { Footer } from "./Footer/Footer";
export default function Home() {
  return (
    <>
        <IntroPage />
        <About/>
        <LogoCarouselDemo/>
        <ProjectPage/>
        <Footer/>
    </>
  )
}

