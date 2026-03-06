import { Sequelize } from "sequelize";
import { env } from "./env";

export const sequelize = new Sequelize(
  env.db.name!,
  env.db.user!,
  env.db.pass!,
  {
    host: env.db.host,
    port: env.db.port,
    dialect: "postgres",
    logging: false,
  },
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database");

    await sequelize.sync();
    console.log("modales Synced");
  } catch (err) {
    console.log("Error while connecting to Database", err);
  }
};
