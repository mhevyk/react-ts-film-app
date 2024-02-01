import { z } from "zod";

const FilmGenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const FilmGenresSchema = z.object({
  genres: z.array(FilmGenreSchema),
});
