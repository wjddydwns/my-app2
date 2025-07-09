"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center navbarDemo">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-5", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Git hub</HoveredLink>
            <HoveredLink href="/seo">Kakao Talk</HoveredLink>
            <HoveredLink href="/branding">Notion</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Netflix-clone"
              href="https://algochurn.com"
              src="img/pj_img/netflix.png"
              description="넷플릭스 클론 프로젝트 입니다. react redux"
            />
            <ProductItem
              title="N-Store Demo"
              href="https://tailwindmasterkit.com"
              src="img/pj_img/nstore.png"
              description="네이버 스토어 데모 버전 입니다. React MongoDB Express"
            />
            <ProductItem
              title="농산물 플랫폼"
              href="https://gomoonbeam.com"
              src="img/pj_img/platform.png"
              description="알고리즘 프로젝트 입니다. Next KakaoMap Dijkstra"
            />
            <ProductItem
              title="추후 추가 예정"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">wjddydwns159@gmail.com</HoveredLink>
            <HoveredLink href="/individual">010-8708-2247</HoveredLink>
            <HoveredLink href="/team">Git</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
