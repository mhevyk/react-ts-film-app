import { API } from "@lib/api";
import { SimpleFilm } from "@schemas/filmSchema";
import { FilmDetailsResponseSchema } from "@schemas/responseSchema";

class FilmService {
  async getFilmById(id: SimpleFilm["id"]) {
    const response = await API.get(`/movie/${id}`);
    return FilmDetailsResponseSchema.parse(response.data);
  }
}

export default new FilmService();
