import { Sequelize } from "sequelize-typescript";

import { User } from "../user/user.model";

const connection = new Sequelize({
  dialect: "mariadb",
  host: "localhost",
  username: "root",
  password: "root",
  database: "ludis",
  logging: false,
  models: [User],
});

export default connection;
