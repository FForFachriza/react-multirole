import { Sequelize } from "sequelize";

export const db = new Sequelize("react_auth", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

