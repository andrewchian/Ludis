import express from "express";

import userRouter from "./user/user.routes";
import eventRouter from "./event/event.routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/events", eventRouter);

export default router;