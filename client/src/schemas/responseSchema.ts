import { z } from "zod";
import { SimpleFilmSchema } from "./filmSchema";

// Film details response
export const FilmDetailsResponseSchema = SimpleFilmSchema;
export type FilmDetailsResponse = z.infer<typeof FilmDetailsResponseSchema>;
