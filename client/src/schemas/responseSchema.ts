import { z } from "zod";
import {
  UpcomingFilmSchema,
  SimpleFilmSchema,
  PopularFilmSchema,
} from "./filmSchema";
import { FilmGenreSchema } from "./genreSchema";

export const FilmDetailsResponseSchema = SimpleFilmSchema;
export type FilmDetailsResponse = z.infer<typeof FilmDetailsResponseSchema>;

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

export const FilmGenreResponseSchema = z.object({
  genres: z.array(FilmGenreSchema),
});

export type FilmGenreResponse = z.infer<typeof FilmDetailsResponseSchema>;

export const PopularFilmResponseSchema = z.object({
  page: z.number(),
  results: z.array(PopularFilmSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
