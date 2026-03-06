import { Request, Response } from "express";
import { Weather } from "../models/weather_model";
import { WeatherRequestDTO } from "../dto/weather_dto";
import { getWeather } from "../service/weather_services";

export const saveWeatherMapping = async (
  req: Request<{}, {}, WeatherRequestDTO>,
  res: Response
) => {
  try {

    const data = req.body;

    const results = await Promise.all(
      data.map(async (item) => {

        const weather = await getWeather(item.city, item.country);

        const savedWeather = await Weather.create({
          city: item.city,
          country: item.country,
          latitude: weather.latitude,
          longitude: weather.longitude,
          temperature: weather.temperature,
          humidity: weather.humidity
        });

        return savedWeather;

      })
    );

    return res.status(201).json(results);

  } catch (error: any) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to save weather mapping",
      error: error.message
    });

  }
};



// ---------------- WEATHER DASHBOARD API ----------------

export const weatherDashboard = async (
  req: Request,
  res: Response
) => {

  try {

    const weatherData = await Weather.findAll();

    const dashboard = {
      totalCities: weatherData.length,
      data: weatherData
    };

    return res.status(200).json(dashboard);

  } catch (error: any) {

    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch dashboard",
      error: error.message
    });

  }
};