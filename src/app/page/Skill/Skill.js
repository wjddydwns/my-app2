'use client';
import { Gravity, MatterBody } from "@/components/ui/gravity";

function SKILL() {
  return (
    <div
      style={{
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
        width: '100%',
        height: '40vh',
      }}
    >
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Skill.
      </h2>      <div
        style={{
          width: '80%',
          height: '20vh',
          backgroundColor: 'white',
          zIndex: 2,
          borderRadius: '12px',
          boxShadow: 'inset 5px 5px 10px -3px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'azeretMono, monospace',
        }}
      >
        
        <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="10%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
              react
            </div>
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="30%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 ">
              Next.js
            </div>
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="40%"
            y="20%"
            angle={10}
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
              HTML
            </div>
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="75%"
            y="10%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
              CSS
            </div>
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="80%"
            y="20%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-orange-500  text-white rounded-full hover:cursor-grab px-8 py-4 ">
              React-Query
            </div>
          </MatterBody>

          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="50%"
            y="10%"
          >
            <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
              MongoDB
            </div>
          </MatterBody>
        </Gravity>
      </div>
    </div>
  );
}

export { SKILL };
