import express from "express";

import userRouter from "./user/user.routes";
import eventRouter from "./event/event.routes";

const router = express.Router();

router.use("/user", userRouter);
router.use("/event", eventRouter);

export default router;
