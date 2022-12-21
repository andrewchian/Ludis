import { Request, Response } from "express";

export async function createEvent(req: Request, res: Response) {
  const body = req.body;
  return res.json({ message: "Creating event: " + body });
}

export async function updateEvent(req: Request, res: Response) {
  const body = req.body; // req body or payload
  return res.json({ message: "Updating event: " + body });
}

export async function updateAttendees(req: Request, res: Response) {
  const userids = req.query.userids as unknown as number[]; // query param casts as unkown first
  const eventid = req.params.eventid; // path variable
  return res.json({
    message: `Updating attendees: users = ${userids}, event = ${eventid}`,
  });
}

export async function getEvent(req: Request, res: Response) {
  const eventid = req.params.eventid;
  return res.json({ message: "Getting event: " + eventid });
}

export async function getEvents(req: Request, res: Response) {
  const eventids = req.query.eventids;
  return res.json({ message: "Getting events: " + eventids });
}

export async function getEventWithCategories(req: Request, res: Response) {
  const categories = req.query.categories;
  return res.json({ message: "Getting events with categories: " + categories });
}

export async function getUpcomingEvents(req: Request, res: Response) {
  const { offset, limit } = req.query; //object destructuring
  return res.json({
    message: `Getting upcoming events: limit = ${limit}, offest = ${offset}`,
  });
}

export async function deleteEvent(req: Request, res: Response) {
  const eventid = req.params.eventid;
  return res.json({ message: "Deleting event: " + eventid });
}
