import express from "express";
import {
  createEvent,
  updateEvent,
  updateAttendees,
  getEvents,
  getEventWithCategories,
  getUpcomingEvents,
  deleteEvent,
} from "./event.controller";

const router = express.Router();

import { getEvent } from "./event.controller";

router.post("/", createEvent);
router.put("/:eventid", updateEvent);
router.put("/update-attendees/:eventid", updateAttendees);
router.get("/:eventid", getEvent);
router.get("/", getEvents);
router.get("/categories=", getEventWithCategories);
router.get("/get-upcoming-events", getUpcomingEvents);
router.delete("/:eventId", deleteEvent);

export default router;
