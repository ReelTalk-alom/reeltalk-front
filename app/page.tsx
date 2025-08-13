"use client";

import { CustomArrowDown } from "./CustomArrowDown";
import {useRef} from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    scrollRef.current?.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main 
    className="h-screen snap-y snap-mandatory overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    ref={scrollRef}
    >

      {/* 랜딩페이지 */}
      <section className="h-screen w-screen snap-start relative bg-reeltalk-cream-base">
          <div className="flex flex-col items-center justify-center h-full w-full bg-reeltalk-cream-base">
            <h1 className="text-[12vw] font-bold text-black leading-none">REELTALK</h1>
            <div className="text-[1.5rem] text-[#838179]">영화에 대한 모든 이야기</div>
          </div>
          <button 
          onClick = {handleScroll}
          className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center z-5"
          style={{bottom: `calc(0px - 14px)`}}
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="105"
            fill="none"
            stroke="#19171C"
            strokeWidth="0.1" 
            viewBox="0 0 16 16"
            >
                <path d="M8 1v14M4 11l4 4 4-4" />
            </svg>
          </button>
      </section>

      {/* 홈페이지 */}
      <section className="w-screen snap-center relative -mt-6">
        <div className="flex justify-center items-start w-full h-full bg-reeltalk-cream-base">
          <img 
          className="w-full h-[970px] object-cover object-top" 
          src="/images/Exposter.jpg"
          />
        </div>
      </section>

    </main>
  );
}
