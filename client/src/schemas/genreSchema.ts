import { z } from "zod";

export const FilmGenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});
