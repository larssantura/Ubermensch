import { Box, Center, Container, DrawerHeader, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

import CrewPage from "../../Components/Crew/CrewPage";
import MovieCard from "../../Components/Card/MovieCard";
import SomethingWentWrong from "../SomethingWentWrong";
import Router from "next/router";
import NotFound from "../404";

const Movie = ({ movie, simillarMovies, err }) => {
  if (!movie || err || !simillarMovies) {
    return <NotFound />;
  }
  return (
    <>
      <Box
        overflow="hidden"
        display="flex"
        justifyContent="center"
        flexDir="column"
      >
        <Box
          height="max-content"
          width="100vw"
          backgroundImage="/Images/stars.PNG"
          color="white"
          overflow="hidden"
        >
          <Center>
            <Text
              color="white"
              textAlign="center"
              fontWeight={300}
              padding={3}
              fontSize={[14, 20, 30, 30]}
              className="gradient"
              width={["100vw", "100vw", "80vw", "80vw"]}
              mt="60px"
            >
              {`${movie.title} (${movie.release_date.substring(0, 4)})`}
            </Text>
          </Center>
          <Box display={["none", "none", "flex", "flex"]}></Box>
          <motion.div animate={{ marginLeft: "20vw" }}>
            <Box
              borderRadius={20}
              zIndex={2}
              position="relative"
              mt={5}
              backgroundSize="cover"
              backgroundPosition="center"
              width={["250px", "300px", "250px", "250px", "250px"]}
              display={["none", "none", "none", "flex"]}
              height={["400px", "420px", "350px", "350px", "400px"]}
              backgroundImage={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            >
              {/* <Image
                layout="fill"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie poster"
                objectFit="cover"
                className="borderRadius"
              /> */}
            </Box>{" "}
          </motion.div>

          <motion.div animate={{ marginLeft: -550 }}>
            <Box display={["none", "none", "none", "flex"]}>
              <Box
                flexDirection="row"
                width={["100vw", "100vw", "50vw", "50vw"]}
                paddingLeft="5vw"
                minHeight="max-content"
                backgroundColor="#121212"
                display={"flex"}
                marginLeft={[
                  "1000px",
                  "1000px",
                  "1000px",
                  "1000px",
                  "1000px",
                  "1050px",
                ]}
                mb={20}
                mt={50}
                top="120px"
                position="absolute"
                fontSize={10}
              >
                <Box
                  display="flex"
                  padding="10"
                  fontSize={17}
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  {movie.overview.length > 400 ? (
                    <Text fontSize={15} maxWidth={1000}>
                      {movie.overview}
                    </Text>
                  ) : (
                    <Text fontSize={[12, 12, 14, 17]} maxWidth={1500}>
                      {movie.overview}
                    </Text>
                  )}

                  <Box>
                    {movie.genres.map((g) => {
                      return (
                        <Text
                          key={g.id}
                          display="inline-block"
                          margin="5"
                          color="red.300"
                          fontWeight="500"
                        >
                          {g.name}
                        </Text>
                      );
                    })}
                  </Box>

                  <Text
                    color="green.200"
                    fontSize={20}
                    fontWeight="500"
                  >{`${movie.vote_average?.toFixed(1)}/10`}</Text>
                </Box>
              </Box>
            </Box>
          </motion.div>

          <Box
            borderRadius={20}
            backgroundSize="cover"
            backgroundPosition="center"
            width="350px"
            height="500px"
            margin="auto"
            mt={5}
            backgroundImage={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            zIndex={100}
            position="relative"
            display={["flex", "flex", "flex", "none"]}
          >
            {/* <Image
              layout="fill"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster"
              objectFit="cover"
              className="borderRadius"
            /> */}
          </Box>

          <motion.div initial={{ marginLeft: 500 }} animate={{ marginLeft: 0 }}>
            <Box
              display={["flex", "flex", "flex", "none"]}
              textAlign="center"
              flexDirection="row"
              width="100vw"
              minHeight="55vh"
              maxHeight="max-content"
              backgroundColor="#121212"
              pt={100}
              mt={-100}
              zIndex={0}
            >
              <Box
                display="flex"
                padding="10"
                fontSize={17}
                flexDirection="column"
                justifyContent="space-between"
              >
                {movie.overview.length > 400 ? (
                  <Text fontSize={14} maxWidth={1000}>
                    {movie.overview}
                  </Text>
                ) : (
                  <Text fontSize={22} maxWidth={1500}>
                    {movie.overview}
                  </Text>
                )}

                <Box>
                  {movie.genres.map((g) => {
                    return (
                      <Text
                        key={g.id}
                        display="inline-block"
                        margin="5"
                        color="red.300"
                        fontWeight="500"
                      >
                        {g.name}
                      </Text>
                    );
                  })}
                </Box>

                <Text
                  color="green.200"
                  fontSize={20}
                  fontWeight="500"
                >{`${movie.vote_average}/10`}</Text>
              </Box>
            </Box>
          </motion.div>

          <Box textAlign="center">
            <Text
              color="white"
              textAlign="center"
              fontWeight={300}
              padding={3}
              fontSize={30}
              className="gradient"
              margin="30px 0"
              mt="60px"
            >
              Cast
            </Text>

            <CrewPage id={movie.id} />
          </Box>
          <Box
            marginTop={100}
            marginBottom={100}
            width="100vw"
            height="max-content"
            display="flex"
            justifyContent="center"
          >
            <Box width="80vw" textAlign="center">
              {simillarMovies.length > 0 ? (
                <Text
                  color="white"
                  textAlign="center"
                  fontWeight={300}
                  padding={3}
                  fontSize={30}
                  className="gradient"
                >
                  Suggested Movies
                </Text>
              ) : null}
              {simillarMovies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    image={movie.poster_path}
                    title={
                      movie.release_date
                        ? `${movie.title} (${movie.release_date.substring(
                            0,
                            4
                          )})`
                        : null
                    }
                    rate={
                      movie.vote_average ? movie.vote_average.toFixed(1) : null
                    }
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Movie;
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.movie}?api_key=${process.env.API_KEY}&language=en-U`
  );
  let data, data2;
  let err;
  try {
    data = await res.json();
  } catch {
    err = true;
  }

  const res2 = await fetch(`
https://api.themoviedb.org/3/movie/${context.params.movie}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  try {
    data2 = await res2.json();
  } catch {
    err = true;
  }
  if (!data || !data2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie: data,
      simillarMovies: data2.results ? data2.results : null,
      err: err ? err : null,
    },
  };
}
