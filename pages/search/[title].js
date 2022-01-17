import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Router from "next/router";
import React from "react";
import MovieCard from "../../Components/Card/MovieCard";
import NotFound from "../404";

const Search = ({ data, title, err }) => {
  if (err || !title || !data) {
    <NotFound />;
  }
  return (
    <Box
      backgroundImage="/Images/stars.PNG"
      textAlign="center"
      width="100vw"
      maxHeight="fit-content"
      minHeight="90vh"
      paddingBottom="5vh"
    >
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Box height="max-content">
          <Text color="white" fontSize={25} padding={10} pt={20}>
            Results for: <span>{title}</span>
          </Text>
          {data.length === 0 ? (
            <Text fontSize={30} color="white" zIndex={10} mt={50}>
              Nothing found :( <br />
              try again using different keywords
            </Text>
          ) : (
            data.map((movie) => {
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
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const title = context.params.title.includes("_")
    ? context.params.title.replaceAll("_", " ")
    : context.params.title;

  let err;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1`
  ).catch(() => {
    err = true;
    return;
  });

  const data = !err ? await res.json() : [];

  return {
    props: {
      data: data.results ? data.results : [],
      title: title ? title : null,
      err: err ? err : null,
    },
  };
}
