import React from "react";

function Quantum({ boxStyle, boxHead, boxCenter, boxSmall }) {
  return (
    <div className={boxStyle}>
      <span className="font-bold lg:text-[12px] text-[#0F0F0F] leading-none">
        {boxHead}
      </span>

      <span className="font-bold lg:text-[24px] text-[#693B93] leading-none">
        {boxCenter}
      </span>

      <span className="font-light text-[#0F0F0F80] lg:text-[10px] leading-none">
        {boxSmall}
      </span>
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative flex md:mt-4 gap-7.5">
      
      {/* Left Side */}
      <div className="relative md:mt-11">

        <Quantum
          boxHead="Quantum Processing"
          boxCenter="99.9%"
          boxSmall="Accuracy Rate"
          boxStyle="lg:w-[200px] absolute left-26 top-10 px-4 py-4 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-white h-[87px] flex flex-col justify-center gap-1"
        />

        <img
          src={twist}
          alt=""
          className="lg:w-27.5 lg:h-31.5"
        />

        <Quantum
          boxHead="Security"
          boxCenter="Bank-Grade"
          boxSmall="Encryption"
          boxStyle="lg:w-[213px] absolute bottom-32 px-4 py-4 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-white h-[87px] flex flex-col justify-center gap-1"
        />

        <Quantum
          boxHead="Performance"
          boxCenter="1000x"
          boxSmall="Faster Analysis"
          boxStyle="lg:w-[180px] absolute bottom-37 left-60 px-4 py-4 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-white h-[87px] flex flex-col justify-center gap-1"
        />

        <img
          src={dots}
          alt=""
          className="lg:w-30 lg:h-19.5 absolute md:bottom-8 md:left-14 -z-10"
        />

        <Quantum
          boxHead="ROI Increase"
          boxCenter="+47%"
          boxSmall="Average Boost"
          boxStyle="lg:w-[180px] absolute bottom-8 left-42 px-4 py-4 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-white h-[87px] flex flex-col justify-center gap-1"
        />
      </div>

      {/* Right Side Image */}
      <div>
        <img
          src={rectangle}
          alt=""
          className="lg:w-[371px] lg:h-[371px]"
        />
      </div>
    </div>
  );
}
