import { Section } from "@components/ui/Section";
import styled from "styled-components";
import { StarRating } from "@components/ui/StarRating";
import { Genres } from "@components/common/Genres";
import { PosterSlider } from "@components/common/PosterSlider";

// TODO: Replace mock response with actual server data
const newReleasesMockResponse = {
  dates: { maximum: "2024-01-17", minimum: "2023-12-06" },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      popularity: 2998.164,
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      release_date: "2023-11-22",
      title: "Napoleon",
      video: false,
      vote_average: 6.467,
      vote_count: 1126,
    },
    {
      adult: false,
      backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      popularity: 1811.995,
      poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
      release_date: "2023-12-13",
      title: "Society of the Snow",
      video: false,
      vote_average: 8.028,
      vote_count: 812,
    },
    {
      adult: false,
      backdrop_path: "/iNgn9LP0iMuLSnWqolivcY3Y7F6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1393.421,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.481,
      vote_count: 489,
    },
    {
      adult: false,
      backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
      genre_ids: [27, 9648, 53],
      id: 1071215,
      original_language: "en",
      original_title: "Thanksgiving",
      overview:
        "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
      popularity: 656.727,
      poster_path: "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
      release_date: "2023-11-16",
      title: "Thanksgiving",
      video: false,
      vote_average: 6.677,
      vote_count: 517,
    },
    {
      adult: false,
      backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 920.78,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.105,
      vote_count: 984,
    },
    {
      adult: false,
      backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      genre_ids: [28, 53],
      id: 866398,
      original_language: "en",
      original_title: "The Beekeeper",
      overview:
        "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
      popularity: 1065.163,
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      release_date: "2024-01-10",
      title: "The Beekeeper",
      video: false,
      vote_average: 7.591,
      vote_count: 66,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 744.631,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.118,
      vote_count: 6116,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds \u0026 Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 817.581,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds \u0026 Snakes",
      video: false,
      vote_average: 7.227,
      vote_count: 1469,
    },
    {
      adult: false,
      backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
      genre_ids: [16, 10751, 10402, 14, 35],
      id: 901362,
      original_language: "en",
      original_title: "Trolls Band Together",
      overview:
        "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      popularity: 759.154,
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      release_date: "2023-10-12",
      title: "Trolls Band Together",
      video: false,
      vote_average: 7.209,
      vote_count: 527,
    },
    {
      adult: false,
      backdrop_path: "/uvqf3e451hBviQiCvPx4lapVOKf.jpg",
      genre_ids: [27],
      id: 1131755,
      original_language: "en",
      original_title: "A Creature Was Stirring",
      overview:
        "A nurse taking care of her daughter's mysterious affliction struggles to hide her secrets when uninvited strangers take shelter in her house during a lethal blizzard.",
      popularity: 375.955,
      poster_path: "/ikQG3byEFyfwcnF0zmyNtXTmr5v.jpg",
      release_date: "2023-12-08",
      title: "A Creature Was Stirring",
      video: false,
      vote_average: 6.031,
      vote_count: 33,
    },
  ],
  total_pages: 152,
  total_results: 3040,
};

const CardTitle = styled.h5`
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.white};

  // showing limited number of lines if title is very large
  --shown-lines-count: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--shown-lines-count);
  line-clamp: var(--shown-lines-count);
  overflow: hidden;
`;

// TODO: replace dummy function with actual implementation
function getGenreById(genreId: number) {
  return `Genre ${genreId}`;
}

export function NewReleasesSection() {
  return (
    <Section title="New releases" navigatesTo="/new-releases">
      <PosterSlider
        variant="medium"
        slides={newReleasesMockResponse.results}
        renderSlide={(slide) => (
          <>
            <Genres
              genreLikeList={slide.genre_ids}
              getGenre={(genre) => getGenreById(genre)}
              getKey={(genre) => genre}
            />
            <StarRating rating={slide.vote_average * 0.5} />
            <CardTitle>{slide.title}</CardTitle>
          </>
        )}
        getImagePath={(slide) =>
          `https://image.tmdb.org/t/p/original${slide.poster_path}`
        }
        getWatchNowPath={(slide) => `watch/${slide.id}`}
      />
    </Section>
  );
}
