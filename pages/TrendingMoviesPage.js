import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieCard from "../Components/Card/MovieCard";
import { Icon } from "@iconify/react";

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
        });
    }
  });
  return (
    <div>
      <Box
        width={type === "trending" ? "max-content" : "100vw"}
        position="relative"
        pb={10}
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
    </div>
  );
};

export default TrendingMoviesPage;
