import { Section } from "@components/ui/Section";
import { PosterSlider } from "../../../components/common/PosterSlider";
import { Genres } from "../../../components/common/Genres";
import { StarRating } from "../../../components/ui/StarRating";
import styled from "styled-components";

const mockResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg",
      genre_ids: [10766],
      id: 206559,
      origin_country: ["ZA"],
      original_language: "af",
      original_name: "Binnelanders",
      overview:
        "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
      popularity: 5735.759,
      poster_path: "/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
      first_air_date: "2005-10-13",
      name: "Binnelanders",
      vote_average: 6.22,
      vote_count: 25,
    },
    {
      adult: false,
      backdrop_path: "/5AkPhazx8F0Ht74CUdJU03vNzBi.jpg",
      genre_ids: [10767, 35],
      id: 61818,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Late Night with Seth Meyers",
      overview:
        'Seth Meyers, who is "Saturday Night Live’s" longest serving anchor on the show’s wildly popular "Weekend Update," takes over as host of NBC’s "Late Night" — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for "SNL," Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from "SNL" to his new post at "Late Night," as Jimmy Fallon moves to "The Tonight Show".',
      popularity: 4227.034,
      poster_path: "/x5asOuPOjW21e0Ykkvkuzu1TGEl.jpg",
      first_air_date: "2014-02-25",
      name: "Late Night with Seth Meyers",
      vote_average: 5.6,
      vote_count: 60,
    },
    {
      adult: false,
      backdrop_path: "/o8nc6wF6qGTLQMGmZtNZ4g4iaQK.jpg",
      genre_ids: [10764],
      id: 37678,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Voice",
      overview:
        "The strongest vocalists from across the United states compete in a blockbusters vocal competition, the winner becomes “The Voice.” The show's innovative format features four stages of competition: the blind auditions, the battle rounds, the knockouts and, finally, the live performance shows.",
      popularity: 3118.966,
      poster_path: "/sjtly63wIdTEgdtGvCAOB9AeEyg.jpg",
      first_air_date: "2011-04-26",
      name: "The Voice",
      vote_average: 6.0,
      vote_count: 184,
    },
    {
      adult: false,
      backdrop_path: "/fyAfSAX0CNkvf75p6fAF9UAbg5E.jpg",
      genre_ids: [80, 18, 35],
      id: 79744,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Rookie",
      overview:
        "Starting over isn’t easy, especially for small-town guy John Nolan who, after a life-altering incident, is pursuing his dream of being an LAPD officer. As the force’s oldest rookie, he’s met with skepticism from some higher-ups who see him as just a walking midlife crisis.",
      popularity: 3094.854,
      poster_path: "/jbMefmo6EjcvpOULP50nfMpGP70.jpg",
      first_air_date: "2018-10-16",
      name: "The Rookie",
      vote_average: 8.3,
      vote_count: 1535,
    },
    {
      adult: false,
      backdrop_path: "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
      genre_ids: [80, 18],
      id: 72879,
      origin_country: ["FR"],
      original_language: "fr",
      original_name: "Demain nous appartient",
      overview:
        "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
      popularity: 3026.473,
      poster_path: "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
      first_air_date: "2017-07-17",
      name: "Tomorrow Is Ours",
      vote_average: 6.245,
      vote_count: 49,
    },
    {
      adult: false,
      backdrop_path: "/ej5VNvBy4VqCqsuamY4oe4EiwFb.jpg",
      genre_ids: [80, 18, 10759],
      id: 32798,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Hawaii Five-0",
      overview:
        "Steve McGarrett returns home to Oahu, in order to find his father's killer. The governor offers him the chance to run his own task force (Five-0). Steve's team is joined by Chin Ho Kelly, Danny \"Danno\" Williams, and Kono Kalakaua.",
      popularity: 2860.838,
      poster_path: "/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg",
      first_air_date: "2010-09-20",
      name: "Hawaii Five-0",
      vote_average: 7.739,
      vote_count: 1582,
    },
    {
      adult: false,
      backdrop_path: "/d8dunoo0lp2bw0R2Uea5yXy1URs.jpg",
      genre_ids: [18, 80, 10759],
      id: 75219,
      origin_country: ["US"],
      original_language: "en",
      original_name: "9-1-1",
      overview:
        "Explore the high-pressure experiences of police officers, paramedics and firefighters who are thrust into the most frightening, shocking and heart-stopping situations. These emergency responders must try to balance saving those who are at their most vulnerable with solving the problems in their own lives.",
      popularity: 2812.981,
      poster_path: "/ax6YyNcPsuPbKze9hxdH4dU3e9w.jpg",
      first_air_date: "2018-01-03",
      name: "9-1-1",
      vote_average: 8.223,
      vote_count: 2243,
    },
    {
      adult: false,
      backdrop_path: "/oXesrxVxymFwlzlcLGj4DjAhlUb.jpg",
      genre_ids: [80, 18],
      id: 94372,
      origin_country: ["US"],
      original_language: "en",
      original_name: "FBI: Most Wanted",
      overview:
        "The Fugitive Task Force relentlessly tracks and captures the notorious criminals on the Bureau’s Most Wanted list. Seasoned agent Jess LaCroix oversees the highly skilled team that functions as a mobile undercover unit that is always out in the field, pursuing those who are most desperate to elude justice.",
      popularity: 2674.326,
      poster_path: "/vpprgWCuDJ4CucJhFB4fBHdX9D7.jpg",
      first_air_date: "2020-01-07",
      name: "FBI: Most Wanted",
      vote_average: 7.6,
      vote_count: 336,
    },
    {
      adult: false,
      backdrop_path: "/bIHCUqaapZdRjd2kzSDiwzYyrpC.jpg",
      genre_ids: [16, 35, 10759, 10765, 10751],
      id: 45140,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Teen Titans Go!",
      overview:
        "Robin, Starfire, Raven, Beast Boy and Cyborg return in all-new, comedic adventures. They may be super heroes who save the world every day ... but somebody still has to do the laundry!",
      popularity: 2658.01,
      poster_path: "/mTMAxrRaDp0TFpdFVinD3grrqr9.jpg",
      first_air_date: "2013-04-23",
      name: "Teen Titans Go!",
      vote_average: 6.764,
      vote_count: 565,
    },
    {
      adult: false,
      backdrop_path: "/aA7628zqsHEKTqBGiYjzLDYzSUU.jpg",
      genre_ids: [18],
      id: 3365,
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Grange Hill",
      overview:
        "Children's drama series following the lives of students and teachers at Grange Hill comprehensive school.",
      popularity: 2512.332,
      poster_path: "/8SziJYek4dEumfweUY9GnnOtcJS.jpg",
      first_air_date: "1978-02-08",
      name: "Grange Hill",
      vote_average: 6.5,
      vote_count: 21,
    },
  ],
  total_pages: 8135,
  total_results: 162693,
};

const CardTitle = styled.h5`
  font-size: 32px;
  line-height: 40px;
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

export function FeaturedTvSection() {
  return (
    <Section title="Featured TV shows" navigatesTo="/featured-tvs">
      <PosterSlider
        variant="small"
        slides={mockResponse.results}
        renderSlide={(slide) => (
          <>
            <Genres
              genreLikeList={slide.genre_ids}
              getGenre={(genre) => getGenreById(genre)}
              getKey={(genre) => genre}
            />
            <StarRating rating={slide.vote_average * 0.5} />
            <CardTitle>{slide.original_name}</CardTitle>
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
