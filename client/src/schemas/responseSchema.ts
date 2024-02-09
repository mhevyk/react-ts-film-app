import { z } from "zod";
import { UpcomingFilmSchema, SimpleFilmSchema } from "./filmSchema";
import { FilmGenreSchema } from "./genreSchema";

// Film details response
export const FilmDetailsResponseSchema = SimpleFilmSchema;
export type FilmDetailsResponse = z.infer<typeof FilmDetailsResponseSchema>;

// New releases response
export const UpcomingFilmResponseSchema = z.object({
  dates: z.object({
    maximum: z.string(),
    minimum: z.string(),
  }),
  page: z.number(),
  results: z.array(UpcomingFilmSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type NewReleasesResponse = z.infer<typeof UpcomingFilmResponseSchema>;

// Film genres response
export const FilmGenreResponseSchema = z.object({
  genres: z.array(FilmGenreSchema),
});

export type FilmGenreResponse = z.infer<typeof FilmDetailsResponseSchema>;
