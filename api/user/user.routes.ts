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

// colon for path params to change route
router.get("/:userid", getUser);

// query params is always slash
router.get("/", getUsers);
router.delete("/:userid", deleteUser);

export default router;
