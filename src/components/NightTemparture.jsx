import React from "react";
import { WeatherSkeleton } from "./WeatherSkeleton";
export const NightTemparture = ({ data, isLoading }) => {
  if (isLoading || !data) {
    return <WeatherSkeleton />;
  }
  return (
    <div>
      <div className="w-103.5 h-207 rounded-[48px] backdrop-blur-[12px] z-20 pt-2 relative">
        <div className="w-99.5 h-126 ml-1.5 mt-1.5 rounded-[42px] pt-14 pl-10 flex-col relative ">
          <p className="text-[18px] font-medium text-[#9CA3AF]">{data.date}</p>
          <h1 className="text-5xl font-extrabold text-white">
            {data.location}
          </h1>
          <img
            className="absolute top-49 left-[69.96px] backdrop-blur-10"
            src="moon.png"
            alt=""
          />
          <img className="absolute top-30 -left-3" src="shadow.png" alt="" />
          <img
            className="absolute top-[85px] left-[326px]"
            src="location.svg"
            alt=""
          />
        </div>
        <div className="pl-10 absolute top-[470px]">
          <h2 className="text-[144px] font-extrabold bg-clip-text bg-gradient-to-b from-black to-white text-transparent">
            {data.mintemparture}°
          </h2>
          <p className="text-2xl font-extrabold text-[#FF8E27]">
            {data.mindesc}
          </p>
        </div>
        <div className="pl-12 flex place-content-between absolute bottom-10 w-79.5">
          <img src="Home.svg" alt="" />
          <img src="Pin.svg" alt="" />
          <img src="Heart.svg" alt="" />
          <img src="User.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
