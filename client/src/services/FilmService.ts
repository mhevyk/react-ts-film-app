import { API } from "@lib/api";
import { SimpleFilm } from "@schemas/filmSchema";
import {
  FilmDetailsResponseSchema,
  NewReleasesResponseSchema,
} from "@schemas/responseSchema";

class FilmService {
  async getFilmById(id: SimpleFilm["id"]) {
    const response = await API.get(`/movie/${id}`);
    return FilmDetailsResponseSchema.parse(response.data);
  }

  async getNewReleases(page: number) {
    const response = await API.get("/movie/now_playing", { params: { page } });
    return NewReleasesResponseSchema.parse(response.data);
  }
}

export default new FilmService();
