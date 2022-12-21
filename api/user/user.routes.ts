import express from "express";
const router = express.Router();

import { getUser } from "./user.controller";

router.post("/", getUser);
router.put("/:userid", getUser);
router.get("/:userid", getUser);
router.get("/?userids=", getUser);
router.delete("/:userid", getUser);

export default router;
