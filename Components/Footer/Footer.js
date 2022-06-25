import { Box, Flex, Image, List, Text } from "@chakra-ui/react";
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
        <Image
          src="/images/Logo.svg"
          width="250px"
          m="30px 0 "
          alt="logo"
          cursor="pointer"
        />
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
            <Link href={"/Discover/top_rated/1"}>Highest rated movies</Link>
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
        display="flex"
        justifyContent="space-around"
        width="400px"
        height="20vh"
      >
        <Text>
          Designed and developed by
          <Link href="http://larssantura.com" passHref>
            <Text
              fontSize="1.5rem"
              _hover={{
                bgColor: "#003382",
                cursor: "pointer",
                transition: "0.5s",
              }}
            >
              Lars Santura
            </Text>
          </Link>
        </Text>
        <Box>
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
        <Link href="https://www.linkedin.com/in/larssantura/" passHref>
          <Icon
            icon="akar-icons:linkedin-box-fill"
            color="#eee"
            width="30"
            height="30"
            cursor="pointer"
          />
        </Link>
        <Link href="https://www.larssantura.com/" passHref>
          <Icon
            icon="mdi:web"
            color="#eee"
            width="35"
            height="35"
            cursor="pointer"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
