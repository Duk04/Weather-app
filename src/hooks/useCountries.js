import { useEffect, useState } from "react";
import axios from "axios";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCityData = async () => {
      const { data } = await axios(
        `https://countriesnow.space/api/v0.1/countries`
      );
      setCountries(data.data);
    };

    getCityData();
  }, []);

  // const citiesWithCounties = countries.reduce((acc, { country, cities }) => {
  //   const countryWithCities = cities.map((city) => `${city}, ${country}`);

  //   acc.push(countryWithCities);

  //   return acc;
  // }, []);
  const citiesWithCountries = countries.flatMap(({ country, cities }) =>
    cities.map((city) => `${city}, ${country}`)
  );

  return { citiesWithCountries };
};
