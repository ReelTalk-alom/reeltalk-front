"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LogIn() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen font-[gmarket]">
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/testBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px) brightness(0.80)",
        }}
        aria-hidden="true"
      />
      {/* 내용 */}
      <div className="flex relative z-10 w-full h-full">
        {/* 로그인 왼쪽 텍스트 영역 */}
        <div className="flex flex-col justify-evenly ml-12 w-3/5">
          {/* 로그인 왼쪽 텍스트 상단 */}
          <div className="flex flex-col justify-center">
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
          <div className="flex flex-col justify-center mt-14 h-[300px]">
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
          <div className="flex flex-col justify-center mt-14">
            <h1 className="text-[54px] font-light opacity-50 text-reeltalk-cream-base">
              A MOVIE STORY FOR ALL MOVIES
            </h1>
          </div>
        </div>
        {/* 로그인 오른쪽 필드 영역 */}
        <div className="w-2/5 bg-reeltalk-cream-base/60 font-[gmarket]">
          <form className="flex flex-col items-center p-6 mt-30">
            {/* 제목 */}
            <h2 className="mb-7 text-[43px] font-extrabold text-reeltalk-darkgray-base font-[gmarket]">
              LOGIN
            </h2>

            {/* 이메일 입력 필드 */}
            <div className="flex relative justify-center w-full">
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-4 mb-4 w-3/4 bg-transparent border-1 placeholder-reeltalk-darkgray-base/90 border-reeltalk-darkgray-base text-reeltalk-darkgray-base placeholder:text-xl focus:outline-none"
              />
            </div>
            {/* 비밀번호 입력 필드 */}
            <div className="flex relative justify-center mb-4 w-full">
              <div className="relative w-3/4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-4 pr-12 w-full bg-transparent placeholder-reeltalk-darkgray-base border-1 border-reeltalk-darkgray-base text-reeltalk-darkgray-base placeholder:text-xl focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-reeltalk-darkgray-base hover:text-reeltalk-darkgray-300 focus:outline-none"
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-6 h-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
            {/* 아이디/비밀번호 찾기 */}
            <div className="flex justify-between items-center mb-10 w-3/4">
              {error && (
                <p className="text-xs font-semibold text-reeltalk-error-red">
                  {error}
                </p>
              )}
              <p className="ml-auto text-sm font-semibold cursor-pointer text-reeltalk-darkgray-base hover:underline">
                아이디 찾기 | 비밀번호 재설정
              </p>
            </div>
            {/* 로그인 버튼 아래 마진 추가 */}
            <button
              type="submit"
              onClick={handleLoginClick}
              disabled={isLoading}
              className="py-3 mb-3 w-3/4 text-xl text-white bg-reeltalk-darkgray-base disabled:bg-reeltalk-darkgray-500 disabled:cursor-not-allowed border-1 border-reeltalk-darkgray-base"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
            <button className="py-3 mb-20 w-3/4 text-xl bg-transparent border-1 text-reeltalk-darkgray-base disabled:bg-reeltalk-darkgray-500 disabled:cursor-not-allow border-reeltalk-darkgray-base">
              회원가입
            </button>
            {/* SNS 로그인 */}
            <div className="flex relative items-center mb-4 w-3/4 font-bold">
              <div className="flex-grow border-t border-reeltalk-darkgray-base"></div>
              <span className="flex-shrink mx-4 text-sm font-bold text-reeltalk-darkgray-base">
                SNS 계정으로 로그인
              </span>
              <div className="flex-grow border-t border-reeltalk-darkgray-base"></div>
            </div>
            <div className="flex space-x-12">
              {/* 카카오 로그인 */}
              <button className="flex items-center justify-center p-2 bg-[#FEE906] rounded-full w-12 h-12">
                <Image
                  src="/images/KakaoTalk_logo.png"
                  alt="Kakao Login"
                  width={24}
                  height={24}
                  className="w-7 h-7"
                />
              </button>

              {/* 구글 로그인 */}
              <button className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-full border">
                <Image
                  src="/images/Google__G__logo.png"
                  alt="Google Login"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>

              {/* 애플 로그인 */}
              <button className="flex justify-center items-center p-2 w-12 h-12 text-white bg-black rounded-full">
                <Image
                  src="/images/Apple_logo_white.png"
                  alt="Apple Login"
                  width={24}
                  height={24}
                  className="w-5 pb-[1px] h-6"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
