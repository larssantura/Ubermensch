import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import MovieCard from "../Components/Card/MovieCard";
import { Icon } from "@iconify/react";
import MovieCard from "../Card/MovieCard";
import SomethingWentWrong from "../../pages/SomethingWentWrong";

const TrendingMoviesPage = ({ type }) => {
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

  return (
    <div>
      <Box
        width={type === "trending" ? "max-content" : "100vw"}
        position="relative"
        padding="20 0"
        pb={type === "top_rated" ? "10vh" : ""}
      >
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
        position="absolute"
        className="blur"
        opacity={0.8}
        backgroundColor="black"
        height={350}
        width={100}
        right="0"
        top={0}
        zIndex={10}
      ></Box>
      {/* <Icon
        icon="bi:arrow-right-circle"
        width="50"
        height="50"
        className="right-arrow"
      /> */}
      <Box
        position="fixed"
        className="blur"
        opacity={0.9}
        backgroundColor="black"
        height="350"
        width={100}
        left={0}
        zIndex={0}
        top={-350}
      >
        {/* <Icon
          icon="bi:arrow-left-circle"
          color=""
          width="50"
          height="50"
          className="left-arrow"
        /> */}
      </Box>
    </div>
  );
};

export default TrendingMoviesPage;
