import React, { useState } from "react";
import { DayTemparture } from "./DayTemparture";
import { useCountries } from "@/hooks/useCountries";

export const Day = ({ weatherData, setCityName, isLoading }) => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { citiesWithCountries } = useCountries();

  const filteredCities = citiesWithCountries.filter((city) =>
    city.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
    setSearch(lettersOnly);
    setShowSuggestions(true);
  };

  const handleSelectCity = (city) => {
    setSearch(city);
    setCityName(city);
    setShowSuggestions(false);
  };

  return (
    <div className="w-[50%] bg-white rounded-2xl relative flex justify-center items-center pt-[60px] ">
      <div className="w-141.75 absolute top-10 left-10">
        <div
          className="flex items-center w-full shadow-xl bg-white rounded-[48px]
          p-4 gap-4 z-20"
          onSubmit={() => preventDefault()}
        >
          <img src="search.svg" alt="Search Icon" className="w-6 h-6" />
          <input
            type="search"
            value={search}
            onChange={handleChange}
            placeholder="Enter City"
            className="flex-grow text-black font-bold text-[20px] outline-none bg-transparent"
          />
        </div>

        {showSuggestions && search.length > 0 && (
          <ul className="absolute mt-2 w- shadow-lg max-h-40 overflow-auto z-30 w-full rounded-3xl backdrop-blur-[12px]">
            {filteredCities.slice(0, 4).map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 w-142.75 hover:bg-gray-200 cursor-pointer text-sm flex text-[28px] items-center font-bold gap-4 "
                onClick={() => handleSelectCity(city)}
              >
                <img src="Pin.svg" alt="" />
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      <DayTemparture data={weatherData} isLoading={isLoading} />
    </div>
  );
};
