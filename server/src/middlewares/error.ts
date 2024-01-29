import { isAxiosError } from "axios";
import { NextFunction, Request, Response } from "express";

export default function (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!isAxiosError(err)) {
    return res.status(500).send("Internal Server Error");
  }

  if (err.response) {
    return res.status(err.response.status).send(err.response.data);
  }

  if (err.request) {
    return res.status(500).send("No response received");
  }

  res.status(500).send("Request failed");
}
