import { Request, Response } from "express";

export async function getEvent(req: Request, res: Response) {
  return res.json({ message: "event 1 information" });
}
