import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import MovieCard from "../../Components/Card/MovieCard";
import NotFound from "../404";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const Search = ({ data, num, type, err }) => {
  if (num > 5 || num < 0 || err) {
    return <NotFound />;
  }
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      exit={{ translateY: "100%" }}
      animate={{ translateY: 0 }}
    >
      <Box
        backgroundImage="/Images/stars.png"
        textAlign="center"
        width="100vw"
        maxHeight="fit-content"
        minHeight="90vh"
        paddingBottom="5vh"
        paddingTop="10vh"
      >
        <Box height="max-content">
          {data
            ? data.map((movie) => {
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
        {type === "top_rated" ? (
          <Flex color="white" justifyContent="center" mt={20}>
            <Link href="/Discover/top_rated" passHref>
              <Text
                margin={2}
                fontSize={25}
                cursor="pointer"
                backgroundColor={
                  type === "top_rated" && num == 0 ? "#00bceb" : ""
                }
                borderRadius="50"
                padding="0 10px"
              >
                1
              </Text>
            </Link>
            <Link href="/Discover/top_rated/2" passHref>
              <Text
                margin={2}
                fontSize={25}
                padding="0 10px"
                cursor="pointer"
                borderRadius="50"
                backgroundColor={num == 2 ? "#00bceb" : ""}
              >
                2
              </Text>
            </Link>
            <Link href="/Discover/top_rated/3" passHref>
              <Text
                margin={2}
                padding="0 10px"
                fontSize={25}
                cursor="pointer"
                borderRadius="50"
                backgroundColor={num == 3 ? "#00bceb" : ""}
              >
                3
              </Text>
            </Link>
            <Link href="/Discover/top_rated/4" passHref>
              <Text
                margin={2}
                fontSize={25}
                padding="0 10px"
                cursor="pointer"
                borderRadius="50"
                backgroundColor={num == 4 ? "#00bceb" : ""}
              >
                4
              </Text>
            </Link>
            <Link href="/Discover/top_rated/5" passHref>
              <Text
                margin={2}
                padding="0 10px"
                fontSize={25}
                cursor="pointer"
                borderRadius="50"
                backgroundColor={num == 5 ? "#00bceb" : ""}
              >
                5
              </Text>
            </Link>
          </Flex>
        ) : null}
      </Box>
    </motion.div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const type = context.params.getMovies;
  let err;
  let res;
  if (type[0] === "trending") {
    res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
    );
  }
  if (type[0] === "top_rated") {
    res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        process.env.API_KEY
      }&language=en-US&page=${type[1] !== 0 ? type[1] : "1"}`
    ).catch(() => {
      err = true;
    });
  }

  const data = await res.json();
  if (!type[1]) {
    type[1] = 0;
  }

  return {
    props: {
      data: data.results ? data.results : null,
      num: type[1],
      type: type[0],
      err: err ? err : null,
    },
  };
}
