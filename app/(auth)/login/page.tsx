"use client";

import { useState, useEffect } from "react";

export default function LogIn() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/testBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
        }}
        aria-hidden="true"
      />
      {/* 내용 */}
      <div className="flex relative z-10 w-full h-full">
        {/* 로그인 왼쪽 텍스트 영역 */}
        <div className="flex flex-col justify-center font-[gmarket] w-3/5">
          {/* 로그인 왼쪽 텍스트 상단 */}
          <div className="flex flex-col justify-center -mt-10 ml-8">
            <h1 className="text-[180px] leading-none text-reeltalk-cream-base -ml-2.5 -mb-8 font-extrabold">
              REELTALK
            </h1>
            <h1 className="text-[54px] font-light opacity-50 text-reeltalk-cream-base">
              IS
            </h1>
            <h1 className="text-[54px] font-light opacity-50 text-reeltalk-cream-base">
              MOVIE REVIEW WITH
            </h1>
          </div>
          {/* 로그인 왼쪽 텍스트 중간 */}
          <div className="flex flex-col justify-center mt-14 ml-8 h-[300px]">
            {["IMAGE", "TEXT", "VIDEO"].map((item, idx) => (
              <h1
                key={item}
                className={
                  (activeIndex === idx
                    ? "text-[180px] leading-none font-extrabold opacity-100"
                    : "text-[54px] font-light opacity-50") +
                  " text-reeltalk-cream-base transition-all duration-300 ease-in-out"
                }
                aria-live="polite"
                tabIndex={0}
              >
                {item}
              </h1>
            ))}
          </div>
          {/* 로그인 왼쪽 텍스트 하단 */}
          <div className="flex flex-col justify-center mt-14 ml-8">
            <h1 className="text-[54px] font-light opacity-50 text-reeltalk-cream-base">
              A MOVIE STORY FOR ALL MOVIES
            </h1>
          </div>
        </div>
        {/* 로그인 오른쪽 필드 영역 */}
        <div className="w-2/5 opacity-60 bg-reeltalk-cream-base"></div>
      </div>
    </div>
  );
}
