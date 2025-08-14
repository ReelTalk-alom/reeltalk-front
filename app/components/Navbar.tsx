"use client";
import { PiUserCircleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <header 
        className="text-black bg-reeltalk-cream-base w-full h-[6.5vh] flex items-center justify-between px-6 absolute top-6"
        >
            
            {/*라우팅 버튼들*/}
            <div className="flex justify-center items-center gap-x-8 text-[1vw]">
                <div>홈</div>
                <div>영화</div>
                <div>릴톡</div>
                <div>크리톡</div>
            </div>

            {/*로고*/}
            <div className="text-[1.5vw] font-bold">REELTALK</div>

            {/*검색 및 프로필*/}
            <div className="flex justify-center items-center gap-x-5">
                <form className="flex justify-center items-center gap-x-1">
                    <input type="text" className="border border-1 w-[14vw] h-[3vh]"/>
                    <button>
                        <CiSearch className="w-[20px] h-[20px]"/>
                    </button>
                </form>
                <PiUserCircleThin className="w-[30px] h-[30px]"/>
            </div>
        </header>
    )
}