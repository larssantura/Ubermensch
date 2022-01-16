import { Box, Flex, List, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Spinner from "../Spinner/Spinner";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <Box
      display="flex"
      height={"max-content"}
      backgroundColor="black"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      position="relative"
      overflowX="hidden"
      textAlign="center"
    >
      <Link href="/" passHref>
        <Text color="#00bceb" fontSize={[40]} mb={10} pt={5} cursor="pointer">
          Ü
        </Text>
      </Link>

      <Box>
        <Box
          display="flex"
          color="white"
          justifyContent="center"
          alignItems="center"
          fontSize={[10, 15, 15, 15]}
        >
          <Box
            borderRight="1px solid grey"
            _hover={{ color: "#00bceb" }}
            padding={5}
          >
            <Link href={"/"}>Home</Link>
          </Box>

          <Box
            padding={5}
            borderRight="1px solid grey"
            _hover={{ color: "#00bceb" }}
          >
            <Link href={"/Discover/trending"}>Trending movies</Link>
          </Box>
          <Box
            padding={5}
            borderRight="1px solid grey"
            _hover={{ color: "#00bceb" }}
          >
            <Link href={"/Discover/top_rated/1"}>Heighest rated movies</Link>
          </Box>
          <Box
            padding={5}
            borderRight="1px solid grey"
            _hover={{ color: "#00bceb" }}
          >
            <Link href={"/about"}>About the website</Link>
          </Box>
          <Box padding={5} _hover={{ color: "#00bceb" }}>
            <Link href={"https://www.themoviedb.org/documentation/api"}>
              About the API
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        alignItems="center"
        justifyContent="center"
        display="flex"
        mt={10}
        pb={5}
      >
        <Box marginRight={10}>
          <Link href="https://github.com/lsantura" passHref>
            <Icon
              icon="akar-icons:github-fill"
              color="#eee"
              width="30"
              height="30"
              cursor="pointer"
            />
          </Link>
        </Box>
        <Link href="https://wa.me/201098282338" passHref>
          <Icon
            icon="akar-icons:whatsapp-fill"
            color="#eee"
            width="30"
            height="30"
            cursor="pointer"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
