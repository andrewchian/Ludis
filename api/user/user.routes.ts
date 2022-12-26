import express from "express";
import {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} from "./user.controller";
const router = express.Router();

import { getUser } from "./user.controller";

router.post("/", createUser);
router.put("/:userid", updateUser);
router.get("/:userid", getUser);
router.get("/?userids=", getUsers);
router.delete("/:userid", deleteUser);

export default router;
