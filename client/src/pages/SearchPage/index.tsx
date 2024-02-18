import { FilmCard } from "@components/styled/FilmCard";
import { Button } from "@components/ui/Button";
import { ResponsiveGrid } from "@layouts/ReponsiveGrid";
import { repeatComponent } from "@utils/repeatComponent";
import { useNavigate, useSearchParams } from "react-router-dom";

// TODO: remove mock
const mockFilm = {
  adult: false,
  backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  belongs_to_collection: {
    id: 535313,
    name: "Godzilla Collection",
    poster_path: "/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
    backdrop_path: "/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg",
  },
  budget: 200000000,
  genresIds: [28, 878, 53],
  homepage: "https://www.warnerbros.com/movies/godzilla-vs-kong",
  id: 399566,
  imdb_id: "tt5034838",
  original_language: "en",
  original_title: "Godzilla vs. Kong",
  overview:
    "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
  popularity: 124.355,
  poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
  production_companies: [
    {
      id: 923,
      logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
      name: "Legendary Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-03-24",
  revenue: 470116094,
  runtime: 114,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "One Will Fall",
  title: "Godzilla vs. Kong",
  video: false,
  vote_average: 7.635,
  vote_count: 9367,
};

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // TODO: use search value
  const searchValue = searchParams.get("query") ?? "";

  return (
    <>
      {/* TODO: implement API endpoint */}
      <ResponsiveGrid minWidth="250px" gap="35px">
        {repeatComponent(<FilmCard film={mockFilm as any} />, 20)}
      </ResponsiveGrid>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </>
  );
}
