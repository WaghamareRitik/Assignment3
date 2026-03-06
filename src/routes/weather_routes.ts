import { Router } from "express";
import {
  saveWeatherMapping,
  weatherDashboard,
} from "../controller/weather_controller";
import { validateWeatherRequest } from "../middleware/validation_middleware";

const router = Router();

router.post("/SaveWeatherMapping", validateWeatherRequest, saveWeatherMapping);

router.get("/weatherDashboard", weatherDashboard);

export default router;
