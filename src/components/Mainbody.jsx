import React, { useEffect, useState } from "react";
import { Day } from "./Day";
import { Night } from "./Night";
import axios from "axios";

export const Mainbody = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weatherData, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    const apikey = process.env.WEATHERAPIKEY;

    const getWeatherData = async () => {
      setWeatherLoading(true);
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
      setWeatherLoading(false);
    };

    getWeatherData();
  }, [cityName]);

  return (
    weatherData && (
      <div className=" flex bg-white w-screen h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-35 border rounded-full flex justify-center items-center p-6.25px bg-contain gap-4 bg-white border-gray-300 z-50">
          <div className="relative z-0">
            <div className="absolute size-35 bg-white -left-[111px] -top-[114px]"></div>
            <div className="absolute h-35 w-35 bg-[#0F141E] bottom-[50px] rounded-full"></div>
            <div className="absolute size-35 bg-white -left-[99px] -top-[15px]"></div>
            <div className="absolute h-35 w-35 bg-[#0F141E] top-[50px] rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-35 flex justify-center items-center p-6.25px bg-contain gap-4 rounded-l-full  border z-50 border-gray-300  rounded-full">
          <img src="Group4.svg" alt="" />
          <img className="z-50" src="arrow.svg" alt="" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-85 w-85 border rounded-full border-gray-300 z-120"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-135 w-135 border rounded-full border-gray-300 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-235 w-235 border rounded-full border-gray-300  z-10"></div>
        <div className="w-44 h-44 bg-amber-300 absolute top-[120px] left-[280px] rounded-full z-10"></div>
        <div className="w-32 h-32 absolute bottom-[120px] right-[300px] bg-[rgba(110,114,201,1)] rounded-full"></div>{" "}
        <Day
          weatherData={weatherData}
          setCityName={setCityName}
          isLoading={weatherLoading}
        />
        <Night weatherData={weatherData} isLoading={weatherLoading} />
      </div>
    )
  );
};
