import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieCard from "../Components/Card/MovieCard";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SomethingWentWrong from "./SomethingWentWrong";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const MoviesPage = ({ type }) => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    if (type === "trending") {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((f) => {
          setMovies(f.results);
        })
        .catch(() => {
          return <SomethingWentWrong />;
        });
    }
    if (type === "top_rated") {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      )
        .then((res) => {
          return res.json();
        })
        .then((f) => {
          setMovies(f.results);
        })
        .catch(() => {
          return <SomethingWentWrong />;
        });
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  if (type === "trending") {
    return (
      <Box backgroundImage="url(/Images/stars.png)">
        <Slider {...settings}>
          {movies
            ? movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    image={movie.poster_path}
                    title={`${movie.title}  (${
                      movie.release_date
                        ? movie.release_date.substring(0, 4)
                        : "notProvided"
                    })`}
                    rate={
                      movie.vote_average ? movie.vote_average.toFixed(1) : null
                    }
                  />
                );
              })
            : null}
        </Slider>
      </Box>
    );
  } else {
    return (
      <Box
        width={"100vw"}
        position="relative"
        padding="20 0"
        pb={type === "top_rated" ? "10vh" : ""}
        display="flex"
        justifyContent="center"
        textAlign="center"
        backgroundImage="url(/Images/stars.png)"
      >
        <Box>
          {movies
            ? movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    image={movie.poster_path}
                    title={`${movie.title}  (${
                      movie.release_date
                        ? movie.release_date.substring(0, 4)
                        : "notProvided"
                    })`}
                    rate={
                      movie.vote_average ? movie.vote_average.toFixed(1) : null
                    }
                  />
                );
              })
            : null}
        </Box>
        <Box
          zIndex={10}
          bottom={0}
          cursor="pointer"
          position="absolute"
          right={20}
        >
          <Link href="/Discover/top_rated/2" passHref>
            <Icon
              icon="carbon:next-filled"
              color="white"
              width="60"
              height="60"
            />
          </Link>
        </Box>
      </Box>
    );
  }
};

export default MoviesPage;
