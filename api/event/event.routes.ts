import express from "express";
import {
  createEvent,
  updateEvent,
  addAttendee,
  removeAttendee,
  getEvents,
  getEventWithCategories,
  getUpcomingEvents,
  deleteEvent,
} from "./event.controller";

const router = express.Router();

import { getEvent } from "./event.controller";

router.post("/", createEvent);
router.put("/:eventid", updateEvent);
router.post("/add-attendee/:eventid", addAttendee);
router.delete("/remove-attendee/:eventid", removeAttendee);
router.get("/:eventid", getEvent);
router.get("/", getEvents);
router.get("/categories", getEventWithCategories);
router.get("/get-upcoming-events", getUpcomingEvents);
router.delete("/:eventId", deleteEvent);

export default router;
