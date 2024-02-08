import { API } from "@lib/api";
import { FilmGenreResponseSchema } from "@schemas/responseSchema";

class GenreService {
  async getFilmGenres() {
    const response = await API.get(`genre/movie/list`);
    return FilmGenreResponseSchema.parse(response.data).genres;
  }
}

export default new GenreService();
