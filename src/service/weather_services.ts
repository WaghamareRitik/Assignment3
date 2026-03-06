import { apiGet } from "../utils/api_helper";
import { env } from "../config/env";

export const getWeather = async (city: string, country: string) => {
  const geoData = await apiGet(
    `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`,
    { "X-Api-Key": env.apiNinjaKey },
  );

  if (!geoData.length) {
    throw new Error("City not found");
  }

  const { latitude, longitude } = geoData[0];

  const weather = await apiGet(
    `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`,
    { "X-Api-Key": env.apiNinjaKey },
  );

  return {
    latitude,
    longitude,
    temperature: weather.temp,
    humidity: weather.humidity,
  };
};
