import { API } from "@lib/api";
import { FilmWithDetails } from "@schemas/filmSchema";
import {
  FilmWithDetailsResponseSchema,
  UpcomingFilmResponseSchema,
  PopularFilmResponseSchema,
} from "@schemas/responseSchema";

class FilmService {
  async getFilmById(id: FilmWithDetails["id"]) {
    const response = await API.get(`/movie/${id}`);
    return FilmWithDetailsResponseSchema.parse(response.data);
  }

  async getUpcoming(page: number) {
    const response = await API.get("/movie/upcoming", { params: { page } });
    return UpcomingFilmResponseSchema.parse(response.data);
  }

  async getPopular(page: number) {
    const response = await API.get("/movie/popular", { params: { page } });
    return PopularFilmResponseSchema.parse(response.data);
  }
}

export default new FilmService();
