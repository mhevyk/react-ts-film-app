import { css } from "styled-components";
import { Slider } from "@components/ui/Slider";
import { renderBackdropSlide } from "./renderBackdropSlide";
import { media } from "@theme/mediaQueries";

export const slidesMock = [
  {
    adult: false,
    backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    belongs_to_collection: {
      id: 535313,
      name: "Godzilla Collection",
      poster_path: "/inNN466SKHNjbGmpfhfsaPQNleS.jpg",
      backdrop_path: "/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg",
    },
    budget: 200000000,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 53,
        name: "Thriller",
      },
    ],
    homepage: "https://www.warnerbros.com/movies/godzilla-vs-kong",
    id: 399566,
    imdb_id: "tt5034838",
    original_language: "en",
    original_title: "Godzilla vs. Kong",
    overview:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    popularity: 164.103,
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
    vote_average: 7.646,
    vote_count: 9247,
  },
  {
    adult: false,
    backdrop_path: "/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
    belongs_to_collection: {
      id: 468552,
      name: "Wonder Woman Collection",
      poster_path: "/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg",
      backdrop_path: "/n9KlvCOBFDmSyw3BgNrkUkxMFva.jpg",
    },
    budget: 149000000,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 14,
        name: "Fantasy",
      },
    ],
    homepage: "https://www.warnerbros.com/movies/wonder-woman",
    id: 297762,
    imdb_id: "tt0451279",
    original_language: "en",
    original_title: "Wonder Woman",
    overview:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    popularity: 58.566,
    poster_path: "/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    production_companies: [
      {
        id: 507,
        logo_path: "/aRmHe6GWxYMRCQljF75rn2B9Gv8.png",
        name: "Atlas Entertainment",
        origin_country: "US",
      },
      {
        id: 9995,
        logo_path: "/mAIGhOYhN4N2N0F7p4dbKhgXf3l.png",
        name: "Cruel & Unusual Films",
        origin_country: "US",
      },
      {
        id: 128064,
        logo_path: "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
        name: "DC Films",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2017-05-30",
    revenue: 822854286,
    runtime: 141,
    spoken_languages: [
      {
        english_name: "German",
        iso_639_1: "de",
        name: "Deutsch",
      },
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Power. Grace. Wisdom. Wonder.",
    title: "Wonder Woman",
    video: false,
    vote_average: 7.235,
    vote_count: 19128,
  },
  {
    adult: false,
    backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    belongs_to_collection: null,
    budget: 70000000,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 14,
        name: "Fantasy",
      },
    ],
    homepage: "https://www.hbomax.com/zacksnydersjusticeleague",
    id: 791373,
    imdb_id: "tt12361974",
    original_language: "en",
    original_title: "Zack Snyder's Justice League",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    popularity: 138.579,
    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    production_companies: [
      {
        id: 174,
        logo_path: "/9tefnXnJLGQL97cxs6S3EWEhVyx.png",
        name: "Warner Bros. Pictures",
        origin_country: "US",
      },
      {
        id: 114152,
        logo_path: null,
        name: "The Stone Quarry",
        origin_country: "US",
      },
      {
        id: 507,
        logo_path: "/aRmHe6GWxYMRCQljF75rn2B9Gv8.png",
        name: "Atlas Entertainment",
        origin_country: "US",
      },
      {
        id: 103376,
        logo_path: "/zIFWe4fwWURazXSjz9tF60ihgbH.png",
        name: "Access Entertainment",
        origin_country: "US",
      },
      {
        id: 444,
        logo_path: null,
        name: "Dune Entertainment",
        origin_country: "US",
      },
      {
        id: 128064,
        logo_path: "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
        name: "DC Films",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2021-03-18",
    revenue: 0,
    runtime: 242,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Us united.",
    title: "Zack Snyder's Justice League",
    video: false,
    vote_average: 8.183,
    vote_count: 9411,
  },
];

function composeSlideCSS(backdrop_path: string) {
  return css`
    --overlay-color: rgba(${({ theme }) => theme.colors.backgroundRGB}, 0.6);
    background-image: linear-gradient(
        var(--overlay-color),
        var(--overlay-color)
      ),
      url("https://image.tmdb.org/t/p/original${backdrop_path}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex; // TODO: remove it, it is just for testing
    align-items: center;

    min-height: 90dvh;

    ${media.screens.md} {
      min-height: 60dvh;
    }

    ${media.screens.lg} {
      min-height: unset;
      max-height: 648px;
    }
  `;
}

export function BackdropSlider() {
  return (
    <Slider
      variant="full-screen"
      slides={slidesMock}
      renderSlide={renderBackdropSlide}
      slideStyles={(slide) => composeSlideCSS(slide.backdrop_path)}
      pagination
      navigationControls
      autoplay
    />
  );
}
