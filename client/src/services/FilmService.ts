import { API } from "@lib/api";

class FilmService {
  async getFilm(id: string) {
    // TODO: add generic type
    const response = await API.get<any>(`/movie/${id}`);
    return response.data;
  }
}

export default new FilmService();
