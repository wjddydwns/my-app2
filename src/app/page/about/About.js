import React from 'react'
import './about.css'
import Education from './\bEdu/Education';

const About = () => {
  return (
    <section className="about-section">

      <div className='about_box'>
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-grid">
  <div className="grid-item item1">
    <div className="spline_box">
      <img src='/img/profile.jpg'/>
    </div>
  </div>
  <div className="grid-item item2">
   <Education/>
  </div>
  <div className="grid-item item3">
     <div className="about-textbox">
      <p>
        <strong>Next.js</strong>와 <strong>React.js</strong>를 활용한 웹사이트 구축 역량을 보유하고 있으며, 프론트엔드 개발자로서 <span className="highlight">사용자 경험(UX)</span> 개선에 깊은 관심을 가지고 있습니다.
      </p>
      <p>
        또한, <strong>MERN 스택</strong>을 기반으로 한 백엔드 경험을 통해 데이터 흐름에 대한 이해도를 바탕으로 <span className="highlight">완성도 높은 웹 서비스</span>를 구현하고 있습니다.
      </p>
      <p>
        직관적이고 원활한 사용자 경험을 제공하는 것을 목표로 <strong>UI/UX 디자인</strong>에 중점을 두며, 사용자 친화적인 인터페이스를 구축하는 데 집중하고 있습니다.
      </p>
    </div>
    
  </div>
</div>

      </div>
      <img 
  src="/img/003.png" 
  style={{
    position: 'relative',   // ✅ 중요
    zIndex: 3,
    top: 200,
    right: 430,
    
    width: '50%',
    height: 'auto',
    pointerEvents: 'none'   // ✅ 이 설정은 이미지가 클릭 방해하지 않게 함
  }} 
/>
  </section>
  
  )
}

export default About