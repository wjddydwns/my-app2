"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../../../components/ui/apple-cards-carousel";
import { GradientHeading } from "../../../components/ui/gradient-heading";

export function ProjectPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 px-40">

       <GradientHeading size="xl">PROJECT</GradientHeading>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent_1= () => {
  return (
    <>
    
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
             넷플릭스 클론 웹 애플리케이션을 개발하며 실무에 가까운 경험을 쌓았습니다. React.js를 기반으로 프로젝트를 구축했으며, 데이터 요청 및 관리를 위해 Axios와 React-Query를 활용하였습니다.
              <br/><br/></span>{" "}
             이 과정에서 API 호출 최적화, 상태 관리, 비동기 데이터 처리 등의 핵심 개념을 익혔으며, 실제 서비스와 유사한 사용자 경험(UX)을 제공하기 위해 UI/UX 설계에도 신경 썼습니다. 또한, 다양한 미디어 데이터를 효율적으로 렌더링하고, 반응형 디자인을 적용하여 다양한 디바이스에서 원활하게 작동하도록 구현하였습니다.
            </p>
            <br/>
            <Image
              src="/img/pj_img/main.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className=" md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        
    </>
  );
};

const DummyContent_2= () => {
  return (
    <>
    
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              # 🌐 Front-End 프로젝트 & Backg-End 풀스택 프로젝트 입니다.  <br/>
              자세한 설명은 깃허브
</span>{" "}
            </p>
            <br/>
            <Image
              src="/img/pj_img/nstore.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className=" md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        
    </>
  );
};

const DummyContent_3= () => {
  return (
    <>
    
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">
                      🧺 지역 농산물 유통 플랫폼<br/>
                    </span>{" "}
                    가천대학교 알고리즘 팀 프로젝트 - Group A<br/>
                    중간 유통 마진으로 인한 과일 가격 상승 문제를 해결하기 위해, 소비자와 농부가 직접 거래할 수 있는 웹 플랫폼을 구축했습니다. Kakao 지도와 알고리즘을 활용해 농장 추천과 최단 경로 계산 기능을 제공합니다.<br/>
                    🔧 기술 스택<br/>
                    • Next.js, React, Kakao Map API (react-kakao-maps-sdk)<br/>
                    • 다익스트라 알고리즘 (경로 최적화)<br/>
                    • 탐욕 알고리즘 (농장 추천)<br/>
            </p>
            <br/>
            <Image
              src="/img/pj_img/platform.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className=" md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        
    </>
  );
};


const data = [
  {
    category: "FE",
    title: "Netflix-Clone",
    src: "/img/pj_img/netflix.webp",
    content: <DummyContent_1 />,
  },
  {
    category: "FullStack",
    title: "N-store Demo.",
    src:'/img/pj_img/nstore.webp',
    content: <DummyContent_2 />,
  },
  {
    category: "FE & Planning",
    title: "농상물 플렛폼",
    src:"/img/pj_img/platform.webp",
    content: <DummyContent_3 />,
  },

  

];
