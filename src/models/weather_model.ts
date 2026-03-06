import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface WeatherAttributes {
  id?: number;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  temperature: number;
  humidity: number;
}

export class Weather extends Model<WeatherAttributes> {}

Weather.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "weather",
    timestamps: true,
  },
);
