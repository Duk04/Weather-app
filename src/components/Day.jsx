import React, { useState } from "react";
import { DayTemparture } from "./DayTemparture";
import { useCountries } from "@/hooks/useCountries";

export const Day = ({ weatherData, setCityName }) => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { citiesWithCounties } = useCountries();

  const filteredCities = citiesWithCounties.filter((city) =>
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
    <div className="w-[50%] bg-[#F3F4F6] rounded-2xl relative flex justify-center items-start pt-[60px] px-6 z-10">
      <div className="w-full relative">
        <div
          className="flex items-center w-full shadow-xl bg-white rounded-[48px]
          p-4 gap-4 z-20"
          onSubmit={(e) => e.preventDefault()}
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

        {showSuggestions && search.length > 1 && (
          <ul className="absolute mt-2 bg-white rounded-md shadow-lg max-h-40 overflow-auto z-30 w-full">
            {filteredCities.slice(0, 10).map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                onClick={() => handleSelectCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      <DayTemparture data={weatherData} />
    </div>
  );
};
