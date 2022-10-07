import express from "express";
const router = express.Router();

import { getEvent } from "./event.controller";

router.get("/", getEvent);

export default router;
