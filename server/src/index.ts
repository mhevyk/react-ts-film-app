import "./config/env";
import express from "express";
import corsMiddleware from "./middlewares/cors";

const app = express();
app.use(corsMiddleware());

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
