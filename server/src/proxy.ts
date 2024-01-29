import axios from "axios";
import { NextFunction, Request, Response } from "express";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestURL = new URL(req.url, `http://${req.headers.host}`);

    const query = new URLSearchParams(requestURL.searchParams);
    query.set("api_key", process.env.FILM_API_KEY);
    query.set("language", process.env.FILM_API_LOCALE);

    const response = await axios({
      method: req.method,
      data: req.body,
      params: query,
      url: requestURL.pathname,
      baseURL: process.env.FILM_API_URL,
    });

    res.status(response.status).json(response.data);
  } catch (error: unknown) {
    next(error);
  }
}
