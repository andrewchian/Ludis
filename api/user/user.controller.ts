import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  return res.json({ message: "user 1 information" });
}

