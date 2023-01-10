import { Request, Response } from "express";
import pool from "../db/connection";
import { fixString } from "../util";
import { Event, EventCategory } from "./event.model";

export async function createEvent(req: Request, res: Response) {
  //const body = req.body;
  //return res.json({ message: "Creating event: " + body });

  let {
    hostid,
    name,
    description,
    location,
    startTimeStamp,
    endTimeStamp,
    categories,
  } = req.body as unknown as Event;

  const event: Event = {
    hostid,
    name,
    description,
    location,
    startTimeStamp,
    endTimeStamp,
    categories,
  };

  const categoriesAsString = event.categories
    .map((cat) => cat.valueOf())
    .join(", ");

  let sqlStatement: string = `INSERT INTO Events (hostid, name, description, location, startTimeStamp, endTimeStamp, categories) VALUES
    (${event.hostid}, '${fixString(event.name)}', '${fixString(
    event.description
  )}', '${fixString(event.location)}', '${fixString(
    startTimeStamp
  )}', '${fixString(endTimeStamp)}', '${categoriesAsString}'
    )`;

  try {
    await pool.query(sqlStatement);
  } catch (error) {
    return res
      .json({
        message: `error when trying to add user: '${event}`,
      })
      .status(500);
  }

  console.log("event made");

  let eventid = await pool.query(
    "SELECT id FROM Events WHERE name = '" + name + "'"
  );
  eventid = eventid.rows[0].id;

  console.log("event id found:" + eventid);

  sqlStatement = `INSERT INTO HostEvents (hostid, eventid) VALUES (${hostid}, ${eventid})`;
  await pool.query(sqlStatement);

  console.log("host added");

  return res.json({ event }).status(201);
}

export async function updateEvent(req: Request, res: Response) {
  const eventid = parseInt(req.params.eventid);
  const {
    hostid,
    name,
    description,
    location,
    startTimeStamp,
    endTimeStamp,
    categories,
  } = req.body as unknown as Event;

  let sqlStatement = `UPDATE Events SET 
    name = '${fixString(
      name
    )}', description = '${description}', hostid = ${hostid},
    location = '${fixString(location)}', startTimeStamp = '${fixString(
    startTimeStamp
  )}', endTimeStamp = '${fixString(endTimeStamp)}', categories = '${categories
    .map((cat) => cat.valueOf())
    .join(", ")}'
    WHERE id = ${eventid}`;

  try {
    await pool.query(sqlStatement);
  } catch (error) {
    return res
      .json({
        message: `error when trying to add user: '${eventid}`,
      })
      .status(500);
  }

  return res.json({ eventid }).status(201);
}

export async function addAttendee(req: Request, res: Response) {
  const userid = req.query.userid as unknown as number; // query param casts as unkown first
  const eventid = req.params.eventid; // path variable

  await pool.query(
    `INSERT INTO EventAttendees (eventid, attendeeid) VALUES (${eventid}, ${userid})`
  );

  return res.json({
    message: `Updating attendees: user = ${userid}, event = ${eventid}`,
  });
}

export async function removeAttendee(req: Request, res: Response) {
  const userid = req.query.userid as unknown as number; // query param casts as unkown first
  const eventid = req.params.eventid; // path variable

  await pool.query(
    `DELETE FROM EventAttendees WHERE eventid = ${eventid} AND Attendeeid = ${userid}`
  );

  return res.json({
    message: `Updating attendees: user = ${userid}, event = ${eventid}`,
  });
}

export async function getEvent(req: Request, res: Response) {
  const eventid = req.params.eventid;
  pool.query(
    "SELECT * FROM Events WHERE id = " + eventid,
    (err, queryResponse) => {
      const event = queryResponse.rows[0];
      return res.json({ event }).status(200);
    }
  );
}

export async function getEvents(req: Request, res: Response) {
  // const eventids = req.query.eventids;
  // return res.json({ message: "Getting events: " + eventids });

  const eventids = req.body.eventids as unknown as number[];

  let sqlStatement = "SELECT * FROM Events WHERE ";
  eventids.map((id, i) => {
    sqlStatement += "id = " + id;
    if (i != eventids.length - 1) {
      sqlStatement += " OR ";
    }
  });

  pool.query(sqlStatement, (err, queryResponse) => {
    const events = queryResponse.rows;
    return res.json({ events }).status(200);
  });
}

/*
will implement later

export async function getEventWithCategories(req: Request, res: Response) {
  console.log("anything");
  const categories = req.query.categories as unknown as string;

  console.log(req.query.categories);

  let sqlStatement = "SELECT id FROM Events WHERE categories ";
  categories.split(",").map((cat, i) => {
    if (i != 0) {
      sqlStatement += " OR ";
    }
    sqlStatement += "LIKE '%" + cat + "%'";
  });

  console.log(sqlStatement);

  let sqlResponse = await pool.query(sqlStatement);
  const eventids = sqlResponse.rows.map((row) => row.id);

  return res.json({ eventids });
}
*/

export async function getUpcomingEvents(req: Request, res: Response) {
  const { offset, limit } = req.query; //object destructuring

  // todo
  // incorporate offset

  const sqlStatement = `SELECT * FROM Events WHERE starttimestamp > CURRENT_DATE ORDER BY starttimestamp ASC LIMIT ${limit}`;

  const sqlResponse = await pool.query(sqlStatement);

  const upcomingEvents = sqlResponse.rows.map((e) => {
    const event: Event = {
      ...e,
      startTimeStamp: e.starttimestamp,
      endTimeStamp: e.endtimestamp,
    };
    return event;
  });

  return res
    .json({
      events: upcomingEvents,
    })
    .status(200);
}

export async function deleteEvent(req: Request, res: Response) {
  const eventid = req.params.eventid;
  pool.query(
    "DELETE FROM Events WHERE  id = " + eventid,
    (err, queryResponse) => {
      return res.json({
        message: "User deleted: " + eventid,
      });
    }
  );
}
