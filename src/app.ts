import express from "express";
import weatherRoutes from "./routes/weather_routes";
import { errorHandler } from "./middleware/error_middleware";

const app = express();

app.use(express.json());

app.use("/", weatherRoutes);

app.use(errorHandler);

export default app;
