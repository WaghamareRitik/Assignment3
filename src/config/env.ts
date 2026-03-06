import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 5001,

  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },

  apiNinjaKey: process.env.API_NINJA_KEY,

  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
};
