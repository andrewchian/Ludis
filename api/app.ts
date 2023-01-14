import "reflect-metadata";
import express from "express";

const morgan = require("morgan");
const cors = require("cors");

import router from "./router";

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api", router);

const start = async (): Promise<void> => {
  try {
    app.listen(3001, () => {
      console.log("Server started at http://localhost:3001");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
