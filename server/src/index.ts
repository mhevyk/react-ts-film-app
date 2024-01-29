import "./config/env";
import express from "express";
import proxy from "./proxy";
import corsMiddleware from "./middlewares/cors";
import errorMiddleware from "./middlewares/error";

const app = express();
app.use(corsMiddleware());
app.all("*", proxy);
app.use(errorMiddleware);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
