import express from "express";
const router = express.Router();

import { getUser } from "./user.controller";

router.get("/", getUser);

export default router;
