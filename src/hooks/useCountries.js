import { useEffect, useState } from "react";
import axios from "axios";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCityData = async () => {
      const { data } = await axios(
        `https://countriesnow.space/api/v0.1/countries`
      );
      setCountries(data.data.flatMap());
    };

    getCityData();
  }, []);

  const citiesWithCounties = countries.reduce((acc, { country, cities }) => {
    const countryWithCities = cities.map((city) => `${city}, ${country}`);

    acc.push(countryWithCities);

    return acc;
  }, []);

  return { citiesWithCounties };
};
