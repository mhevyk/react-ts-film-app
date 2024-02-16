import { z } from "zod";

const CollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string(),
  backdrop_path: z.string(),
});

const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

const LanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

const BaseFilmSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const FilmSchema = BaseFilmSchema.extend({
  genre_ids: z.array(z.number()),
});

export const FilmWithDetailsSchema = BaseFilmSchema.extend({
  belongs_to_collection: CollectionSchema.nullable(),
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.string(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  spoken_languages: z.array(LanguageSchema),
  revenue: z.number(),
  status: z.string(),
  runtime: z.number(),
  tagline: z.string(),
});

export type Film = z.infer<typeof FilmSchema>;
export type FilmWithDetails = z.infer<typeof FilmWithDetailsSchema>;
