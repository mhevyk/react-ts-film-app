import { API } from "@lib/api";
import FilmSchema from "@schemas/filmSchema";

class FilmService {
  async getFilmById(id: number) {
    const response = await API.get(`/movie/${id}`);
    return FilmSchema.parse(response.data);
  }
}

export default new FilmService();
