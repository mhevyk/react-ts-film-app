import { z } from "zod";
import { FilmGenreSchema } from "./genreSchema";
import { FilmSchema, FilmWithDetailsSchema } from "./filmSchema";

export const FilmWithDetailsResponseSchema = FilmWithDetailsSchema;
export type FilmWithDetailsResponse = z.infer<
  typeof FilmWithDetailsResponseSchema
>;

export const PaginatedResponseSchema = z.object({
  dates: z
    .object({
      maximum: z.string(),
      minimum: z.string(),
    })
    .optional(),
  page: z.number(),
  results: z.array(FilmSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type PaginatedResponse = z.infer<typeof PaginatedResponseSchema>;

export const FilmGenreResponseSchema = z.object({
  genres: z.array(FilmGenreSchema),
});

export type FilmGenreResponse = z.infer<typeof FilmGenreResponseSchema>;
