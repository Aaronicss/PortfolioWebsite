import React from "react";
import background from "../../assets/BG1.png";
import g1 from "../../assets/Group1.png"
import g2 from "../../assets/Group2.png"
import g3 from "../../assets/Group3.png"
import g4 from "../../assets/Group4.png"
import g5 from "../../assets/Group5.png"
import g6 from "../../assets/Group6.png"

const Tech = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="p-10 bg-cover bg-center w-full px-20">
                <div className="w-full bg-[#2A0134] rounded-xl shadow-xl text-white border-2 border-white"><p className="p-5 text-[#FFC300] text-4xl font-bold flex justify-center">TECH STACK</p>
                <div className="flex justify-around text-center font-bold"><p className="w-1/3">LANGUAGES</p><p className="w-1/3">FRAMEWORK AND TOOLS</p><p className="w-1/3">TECHNOLOGIES</p></div>
                <div className="mt-4 my-6 flex justify-center">
                <div className="w-310 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex justify-around"><img src={g1}></img><img src={g2}></img><img src={g3}></img></div>
                <div className="pt-3 pb-3 flex justify-around"><img src={g4}></img><img src={g5}></img><img src={g6}></img></div>
                </div>
        </div>
        );
};
export default Tech;

