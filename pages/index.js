import { Box, Center, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import CrewCard from "../Components/Card/CrewCard";
import Router from "next/router";
import SearchResults from "../Components/SearchResults/SearchResults";
import Spinner from "../Components/Spinner/Spinner";
import TrendingMoviesPage from "../Components/TrendingMovies/TrendingMoviesPage";

const Home = () => {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      exit={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
    >
      <Center>
        {" "}
        <Box
          width="100vw"
          height="100vh"
          position="relative"
          backgroundImage="/Images/headerImg.jpg"
          backgroundSize="cover"
          backgroundPosition="center"
          className="dark2"
        ></Box>
        <Box position="absolute">
          <Box
            color="white"
            textAlign="center"
            fontSize={[80, 80, 90, 90]}
            lineHeight={1}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Discover Movies
            </motion.h1>
          </Box>
          <Box
            fontSize={[0, 16, 18, 18]}
            letterSpacing={0.4}
            color="#eee"
            padding="1"
            maxWidth="max-content"
            textAlign="center"
            margin="auto"
            display={["none", "none", "flex", "flex", "flex"]}
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0, y: -30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="p"
            >
              Your Gateway to Anther World
            </motion.h1>
          </Box>
        </Box>
      </Center>

      <Box overflow={["scroll", "scroll", "hidden", "hidden"]}>
        <Box
          backgroundAttachment="fixed"
          display="flex"
          flexDirection="row"
          width="max-content"
          minWidth="100vw"
          minHeight="55vh"
          alignItems="center"
          backgroundImage="/Images/stars.PNG"
          pl="5"
          textAlign="center"
          justifyContent="center"
          pb={5}
          position={["relative", "relative", "static", ""]}
          className="nobar"
          left={0}
        >
          {/* <Spinner /> */}

          <TrendingMoviesPage type="trending" />
          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            color="white"
            right={0}
            height="80%"
            width="10%"
            justifyContent="flex-end"
            zIndex={10}
          >
            <Icon
              onClick={() => {
                Router.push("/Discover/trending");
              }}
              icon="carbon:next-filled"
              color="#00bceb"
              width="60"
              height="60"
              cursor="pointer"
            />
            <Box
              opacity={0.8}
              right={-10}
              height="300px"
              width="150px"
              className="blur"
              backgroundColor="black"
              position="absolute"
              zIndex={-1}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Text
        color="white"
        textAlign="center"
        fontWeight={300}
        padding={3}
        fontSize={30}
        className="gradient"
      >
        Highest rated
      </Text>
      <Box overflow="hidden">
        <Box
          backgroundImage="/Images/stars.PNG"
          backgroundAttachment="fixed"
          display="flex"
          flexDirection="row"
          width="max-content"
          minWidth="100vw"
          minHeight="55vh"
          alignItems="center"
          pt={10}
          pb={10}
          position="relative"
          textAlign="center"
          justifyContent="center"
        >
          <TrendingMoviesPage type="top_rated" />
          <Box
            zIndex={10}
            bottom={10}
            cursor="pointer"
            position="absolute"
            right={20}
          >
            <Link href="/Discover/top_rated/2" passHref>
              <Icon
                icon="carbon:next-filled"
                color="#00bceb"
                width="60"
                height="60"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Home;
