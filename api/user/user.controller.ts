import { Request, Response } from "express";
import pool from "../db/connection";

export async function createUser(req: Request, res: Response) {
  const body = req.body;
  return res.json({ message: "Creating user: " + body });
}

export async function updateUser(req: Request, res: Response) {
  const body = req.body;
  return res.json({ message: "Updating user: " + JSON.stringify(body) });
}

export async function getUser(req: Request, res: Response) {
  const userid = req.params.userid;
  pool.query(
    "SELECT * FROM Users WHERE id = " + userid,
    (err, queryResponse) => {
      console.log(queryResponse);
      const user = queryResponse.rows[0];
      return res.json({ message: "Getting user: " + JSON.stringify(user) });
    }
  ); // run sql query return error and user once finished
}

export async function getUsers(req: Request, res: Response) {
  const userids = req.query.userids;
  return res.json({ message: "Getting users: " + userids });
}

export async function deleteUser(req: Request, res: Response) {
  const userid = req.params.userid;
  return res.json({ message: "Deleting user: " + userid });
}
