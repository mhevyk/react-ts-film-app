import { API } from "@lib/api";
import { FilmGenresSchema } from "@schemas/genreSchema";

class GenreService {
  async getFilmGenres() {
    const response = await API.get(`genre/movie/list`);
    return FilmGenresSchema.parse(response.data).genres;
  }
}

export default new GenreService();
