import "./config/env";
import express from "express";
import proxy from "./proxy";
import corsMiddleware from "./middlewares/cors";
import errorMiddleware from "./middlewares/error";

const app = express();
app.use(corsMiddleware());
app.all("*", proxy);
app.use(errorMiddleware);

export default app;
