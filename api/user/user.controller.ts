import { Request, response, Response } from "express";
import pool from "../db/connection";
import { fixString } from "../util";
import { User } from "./user.model";

export async function createUser(req: Request, res: Response) {
  //const body = req.body;

  const { email, name, major, graduationDate } = req.body as unknown as User;

  const user: User = {
    email,
    name,
    major,
    graduationDate: graduationDate,
  };

  let sqlStatement: string = `INSERT INTO Users (name, email, major, graduationDate) VALUES
    ('${fixString(user.name)}', '${user.email}', '${fixString(
    user.major
  )}', '${fixString(user.graduationDate)}')`;

  try {
    await pool.query(sqlStatement);
  } catch (error) {
    return res
      .json({
        message: `error when trying to add user: '${user}`,
      })
      .status(500);
  }

  return res.json({ user }).status(201);
}

export async function updateUser(req: Request, res: Response) {
  const userid = req.params.userid;
  const { email, name, major, graduationDate } = req.body as unknown as User;

  const user: User = {
    email,
    name,
    major,
    graduationDate: graduationDate,
  };

  let sqlStatement = `UPDATE Users SET 
    name = '${fixString(name)}', email = '${email}', 
    major = '${fixString(major)}', graduationdate = '${fixString(
    graduationDate
  )}' 
    WHERE id = ${userid}`;

  try {
    await pool.query(sqlStatement);
  } catch (error) {
    return res
      .json({
        message: `error when trying to add user: '${user}`,
      })
      .status(500);
  }

  return res.json({ user }).status(201);
}

export async function getUser(req: Request, res: Response) {
  const userid = req.params.userid;
  pool.query(
    "SELECT * FROM Users WHERE id = " + userid,
    (err, queryResponse) => {
      const user = queryResponse.rows[0];
      return res.json({ user }).status(200);
    }
  ); // run sql query return error and user once finished
}

export async function getUsers(req: Request, res: Response) {
  const userids = req.body.userids as unknown as number[];

  let sqlStatement = "SELECT * FROM Users WHERE ";
  userids.map((id, i) => {
    sqlStatement += "id = " + id;
    if (i != userids.length - 1) {
      sqlStatement += " OR ";
    }
  });

  pool.query(sqlStatement, (err, queryResponse) => {
    const users = queryResponse.rows;
    return res.json({ users }).status(200);
  });
}

export async function deleteUser(req: Request, res: Response) {
  const userid = req.params.userid;
  pool.query(
    "DELETE FROM Users WHERE  id = " + userid,
    (err, queryResponse) => {
      return res.json({
        message: "User deleted: " + userid,
      });
    }
  );
}
