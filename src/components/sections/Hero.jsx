import React from "react";
import background from "../../assets/BG1.png";
import face from "../../assets/Lazaro_Img.png";

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="p-20 bg-cover bg-center w-full flex items-center justify-between px-60">
            <div className=""><img src={face} className="w-96 h-96 rounded-full border-4 border-[#FFC300] object-cover"></img></div>
            <ul>
                <li className="font-bold text-4xl">Hello, I'm Aaron Lazaro</li>
                <li className="pb-2">Software Developer aspiring to change the world one software at a time.</li>
                <button className="px-4 py-1 bg-[#FFC300] hover:bg-white rounded-md text-black font-semibold transition">
                    Learn More!
                </button>
            </ul>
        </div>
    );
};
export default Hero;
