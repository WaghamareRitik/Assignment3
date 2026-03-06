import { Weather } from "../models/weather_model";

export const saveWeather = async (data: any) => {
  return Weather.create(data);
};

export const getDashboard = async (city?: string) => {
  if (city) {
    return Weather.findAll({ where: { city } });
  }

  return Weather.findAll({
    attributes: ["id", "city", "country", "weather", "time"],
  });
};
