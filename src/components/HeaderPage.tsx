import React from "react";
import AuthHeader from "./auth-header";
import SearchInput from "./Search-input";

const HeaderPage = () => {
    return (
        <div className="grid grid-cols-3 h-20 items-center px-6 sm:px-10 bg-white/80 shadow-[0_10px_30px_rgba(34,_197,_94,_0.1)] sticky top-0 z-50 backdrop-blur-md border-b border-green-100 [perspective:1000px]">
            <div className="flex justify-start [transform-style:preserve-3d]">
                <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 drop-shadow-sm transition-all duration-500 hover:[transform:translateZ(20px)_scale(1.05)] cursor-pointer">
                    Discuss
                </h1>
            </div>
            <div className="flex justify-center [transform-style:preserve-3d]">
                <div className="transition-all duration-500 hover:[transform:translateZ(15px)] w-full max-w-md">
                    <SearchInput />
                </div>
            </div>
            <div className="flex justify-end gap-3 [transform-style:preserve-3d]">
                <div className="transition-all duration-500 hover:[transform:translateZ(15px)]">
                    <AuthHeader />
                </div>
            </div>
        </div>
    )
}
export default HeaderPage;