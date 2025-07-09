import React from 'react'
import './about.css'
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaJs } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { WiStars } from "react-icons/wi";







const About = () => {
  return (
    <section className="about-section">

      <div className='about_box'>
        <div className='left_box'>

          <div className='profile'></div>

          <div className='contact'>
            <h3>CONTACT <WiStars size={50}/></h3>
            
            <div style={{width:"350px",display:"flex",flexDirection:"column",}} >
              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}><FaBirthdayCake style={{marginRight:"20px"}}/>2001.02.22<br/></div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}><MdEmail style={{marginRight:"20px"}}/>wjddydwns159@gmail.com<br/></div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}><FaGithubSquare style={{marginRight:"20px"}}/>https://www.github.wjddydwns159.com</div>
            </div>
          </div>

          <div className='skill'>
            <h3>TECHNICAL SKILLS <WiStars size={50}/></h3>
            <div style={{width:"350px",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
              <IoLogoReact size={50}/>
              <FaJs size={50}/>
              <SiSpring size={50}/> 
              <SiMysql size={50}/>
            </div>
  
          </div>
          <div className='Language'>
            <h3>Language <WiStars size={50}/></h3>
            <div style={{width:"350px",display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
          <a>KOREAN, JAPANESE</a>
          </div>
          </div>
        </div>
        <div className='right_box'>
          <div className='about_me'>
            <h3>ABOUT ME <WiStars size={50}/></h3>
            <h1>디자인을 사랑하는 개발자</h1>
              <div>
Next.js와 React.js를 활용한 웹사이트 구축 역량을 보유하고 있으며, 프론트엔드 개발자로서 사용자 경험(UX)을 개선하는 데 큰 관심이 있습니다. 또한, 웹의 데이터 흐름을 깊이 이해하기 위해 백엔드 경험도 보유하고 있으며, MERN 스택을 활용한 개발 경험이 있습니다.
직관적이고 원활한 사용자 경험을 제공하는 것을 목표로 디자인과 UI/UX에 중점을 두고 있으며, 사용자 친화적인 인터페이스를 구현하는 데 집중하고 있습니다.
            </div>
          </div>
          <div className='Education'>
            <h3>Education <WiStars size={50}/></h3>
            2023~2025 (가천대학교)
            202506~ing (우리 FISA)
          </div>
          <div className='Project'>
            <h3>Project 추후 추가 예정 <WiStars size={50}/></h3>
          </div>
  
      
      </div>
      </div>
      {/* <img 
  src="/img/003.png" 
  style={{
    position: 'relative',   // ✅ 중요
    zIndex: 3,
    top: 200,
    right: 430,
    
    width: '50%',
    height: 'auto',
    pointerEvents: 'none'   // ✅ 이 설정은 이미지가 클릭 방해하지 않게 함
  }}  */}
  </section>
  
  )
}

export default About