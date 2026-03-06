import { Request, Response, NextFunction } from "express";

export const validateWeatherRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      message: "Body must be an array",
    });
  }

  for (const item of data) {
    if (!item.city || !item.country) {
      return res.status(400).json({
        message: "City and country are required",
      });
    }
  }

  next();
};
