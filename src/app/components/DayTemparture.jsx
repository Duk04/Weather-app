import React from "react";

export const DayTemparture = () => {
  return (
    <div className="w-103.5 h-207 rounded-[48px] backdrop-blur-[12px] relative z-50 shadow-2xl">
      <div className="w-99.5 h-126 ml-1.5 mt-1.5 rounded-[42px] pt-14 pl-10 flex-col relative ">
        <p className="text-[18px] font-medium text-[#6B7280]">April 8,2025</p>
        <h1 className="text-5xl font-extrabold text-[#111827]">UlaanBaatar</h1>
        <img className="absolute top-49 left-[69.96px]" src="sun.png" alt="" />
        <img
          className="absolute top-[85px] left-[326px]"
          src="location.svg"
          alt=""
        />
      </div>
      <div className="pl-10 absolute top-[470px]">
        <h2 className="text-[144px] font-extrabold">26°</h2>
        <p className="text-2xl font-extrabold text-[#FF8E27]">Bright</p>
      </div>
      <div className="pl-12 flex place-content-between absolute bottom-10 w-79.5">
        <img src="/Home.svg" alt="" />
        <img src="/Pin.svg" alt="" />
        <img src="/Heart.svg" alt="/>" />
        <img src="/User.svg" alt="" />
      </div>
    </div>
  );
};
