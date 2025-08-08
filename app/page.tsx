export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

      {/* 랜딩페이지 */}
      <section className="bg-reeltalk-cream-base h-screen w-screen snap-start">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-[12vw] font-bold text-black leading-none">REELTALK</h1>
            <div className="text-[1.5rem] text-[#838179]">영화에 대한 모든 이야기</div>
          </div>
      </section>

      {/* 홈페이지 */}
      <section className="w-screen snap-center">
        <div className="flex justify-center items-start w-full h-full bg-reeltalk-cream-base">
          <div className="w-full h-[970px] bg-black"></div>
        </div>
      </section>

    </main>
  );
}
