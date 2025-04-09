import React, { useEffect, useState } from "react";
import { Day } from "./Day";
import { Night } from "./Night";
import axios from "axios";

export const Mainbody = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weatherData, setWeather] = useState(null);

  useEffect(() => {
    const apikey = process.env.WEATHERAPIKEY;

    const getWeatherData = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityName}`
      );
      const maxtemparture = data.forecast.forecastday[0].day.maxtemp_c;
      const description = data.forecast.forecastday[0].day.condition.text;
      const mintemparture = data.forecast.forecastday[0].day.mintemp_c;
      const date = data.forecast.forecastday[0].date;
      const mindesc = data.current.condition.text;
      const location = data.location.name;
      setWeather({
        data,
        maxtemparture,
        description,
        mintemparture,
        date,
        mindesc,
        location,
      });
      console.log({ data });
    };

    getWeatherData();
  }, [cityName]);

  return (
    weatherData && (
      <div className=" flex bg-white w-screen h-screen relative">
        {" "}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-35 border rounded-full flex justify-center items-center p-6.25px bg-contain gap-4 bg-white border-gray-300 z-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-35 flex justify-center items-center p-6.25px bg-contain gap-4 rounded-l-full opacity-100 z-20">
          <img src="Group4.svg" alt="" />
          <img className="z-50" src="arrow.svg" alt="" />
        </div>
        {/* <div className="absolute bottom-[54%] left-[50%] transform  h-30 w-30 border rounded-l-full flex justify-center items-center p-6.25px bg-contain gap-4 bg-[#0F141E] border-gray-300"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-85 w-85 border rounded-full border-gray-300 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-135 w-135 border rounded-full border-gray-300 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-235 w-235 border rounded-full border-gray-300  z-10"></div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-335 w-335 border rounded-full opacity-10 border-[#111827]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-435 w-435 border rounded-full opacity-10 border-[#111827]"></div> */}
        <div className="w-44 h-44 bg-amber-300 absolute top-[120px] left-[280px] rounded-full z-10"></div>
        <div className="w-32 h-32 absolute bottom-[120px] right-[300px] bg-[rgba(110,114,201,1)] rounded-full"></div>{" "}
        <Day weatherData={weatherData} setCityName={setCityName} />
        <Night weatherData={weatherData} />
      </div>
    )
  );
};
