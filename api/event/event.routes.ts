import express from 'express';
import {
  createEvent,
  updateEvent,
  addAttendee,
  removeAttendee,
  getEvents,
  getUpcomingEvents,
  deleteEvent,
  getEvent,
} from './event.controller';

const router = express.Router();

router.post('/', createEvent);
// router.get("/categories", getEventWithCategories);
router.get('/get-upcoming-events', getUpcomingEvents);
router.get('/:eventid', getEvent);
router.get('/', getEvents);
router.put('/:eventid', updateEvent);
router.post('/add-attendee/:eventid', addAttendee);
router.delete('/remove-attendee/:eventid', removeAttendee);
router.delete('/:eventId', deleteEvent);

export default router;
