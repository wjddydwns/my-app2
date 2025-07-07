import FlowingMenu from "@/app/FlowingMenu/FlowingMenu";
import Background from "./background/Background";
import "./IntroPage.css"; 
import FadeContent from "@/app/FadeContent/FadeContent";
import { SparklesText } from "@/components/ui/sparkles-text";
const IntroPage = () => {
  const demoItems = [
    { link: 'about', text: 'about me', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'PROJECT', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'SKILL', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'CONTACT', image: 'https://picsum.photos/600/400?random=4' }
  ];
  return (
    <>
      <Background/>
      <div className="hero">
      <div style={{ height: '160px', width:"100%",position: 'absolute', zIndex:"1",top:"0"}}>
    <FlowingMenu items={demoItems} />
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
