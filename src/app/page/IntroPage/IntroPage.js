"use client"
import { NavbarDemo } from "@/app/Top_menu/NavbarDemo";
import Background from "./background/Background";
import "./IntroPage.css"; 
import FadeContent from "@/app/FadeContent/FadeContent";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useEffect, useState } from "react";
const IntroPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 2) 스크롤 이벤트 등록·해제
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Background/>
    
      <div className="hero">
      
        <div className={`titleBtn ${scrollPosition > 700 ? 'active' : ''}`} style={{ height: '160px', width:"100%",position: 'absolute', zIndex:"1",top:"0"}}>
          <NavbarDemo/>
    </div>  

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="hero_top"> 
          <h1>Jung Yong Joon</h1>
        </div>
        <div className="hero_mid">
        <SparklesText text="Front-end"> 
        </SparklesText>
        </div>
        <div className="hero_bottom">#Web .dev</div>
        </FadeContent>
  
      </div>
       
    </>
  );
};

export default IntroPage;
