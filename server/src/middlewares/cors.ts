import cors from "cors";

export default function () {
  return cors({
    origin: process.env.CLIENT_URL,
  });
}
