import React, { useEffect, useState } from "react";
import { DayTemparture } from "./DayTemparture";

export const Day = ({ weatherData, setCityName }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
    setSearch(lettersOnly);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setCityName(search.trim());
  };

  useEffect(() => {
    const getCityData = async () => {
      const { city } = await axios(
        `https://countriesnow.space/api/v0.1/countries`
      );
      console.log({ city });
    };

    getCityData();
  }, [search]);

  return (
    <div className="w-[50%] bg-[#F3F4F6] rounded-2xl relative  flex justify-center items-center pt-[2px]">
      <form
        onSubmit={handleSubmit}
        className="flex absolute top-10 left-10 w-141.75 pt-4.5 pb-4.5 pl-6 shadow-xl/30 bg-white rounded-[48px] gap-4 z-20"
      >
        <img src="search.svg" alt="Search Icon" />
        <input
          type="search"
          value={search}
          onChange={handleChange}
          placeholder="Enter City"
          className="text-black font-bold text-[32px] outline-none bg-transparent"
        />
      </form>
      <DayTemparture data={weatherData} />
    </div>
  );
};
