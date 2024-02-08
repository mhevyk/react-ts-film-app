import { z } from "zod";
import { NewReleaseFilmSchema, SimpleFilmSchema } from "./filmSchema";
import { FilmGenreSchema } from "./genreSchema";

// Film details response
export const FilmDetailsResponseSchema = SimpleFilmSchema;
export type FilmDetailsResponse = z.infer<typeof FilmDetailsResponseSchema>;

// New releases response
export const NewReleasesResponseSchema = z.object({
  dates: z.object({
    maximum: z.string(),
    minimum: z.string(),
  }),
  page: z.number(),
  results: z.array(NewReleaseFilmSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type NewReleasesResponse = z.infer<typeof NewReleasesResponseSchema>;

// Film genres response
export const FilmGenreResponseSchema = z.object({
  genres: z.array(FilmGenreSchema),
});

export type FilmGenreResponse = z.infer<typeof FilmDetailsResponseSchema>;
