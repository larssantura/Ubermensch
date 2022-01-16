import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Router from "next/router";
import React from "react";
import MovieCard from "../../Components/Card/MovieCard";
import NotFound from "../404";

const Search = ({ data, title, err }) => {
  console.log(data);
  if (err) {
    <NotFound />;
  }
  return (
    <Box
      backgroundImage="/Images/stars.png"
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
          {!data ? (
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

      {console.log(data)}
    </Box>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const title = context.params.title.replaceAll("_", " ");
  let err;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=67a9442bd256e2f4ab4e22d13b864f8c&language=en-US&query=${title}&page=1`
  ).catch(() => {
    err = true;
    return;
  });

  const data = !err ? await res.json() : null;
  return {
    props: {
      data: data.results.length > 0 ? data.results : null,
      title: title,
      err: err ? err : null,
    },
  };
}
