import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HeaderHtml = () => {
  return (
    <Box
      position="absolute"
      width={["100vw", "100vw", "50vw", "50vw"]}
      right={0}
      top={0}
      height="100vh"
      display="flex"
      alignItems={"left"}
      justifyContent="center"
      flexDirection="column"
      p=" 0 4rem"
      textAlign={["center", "center", "left", "left"]}
    >
      <Text
        color="white"
        fontSize={["5rem", "6rem", "7rem", "8rem"]}
        width="max-content"
        margin={["0 auto", "0 auto", "0", "0"]}
      >
        Pluton
      </Text>
      <Text color="white" fontSize="1.8rem">
        Your Gateway to Explore an amazing World of over 700,000 Movies.
      </Text>
      <Text color="grey" fontSize="1.3rem">
        Including overviews, ratings, cast, trends, and more
      </Text>
      <Link href="/Discover/trending" passHref>
        <Button
          color="white"
          fontSize={["2rem", "2rem", "2.8rem", "2.8rem"]}
          borderRadius="4rem"
          padding={["30px 50px", "30px 50px", "35px 50px", "35px 50px"]}
          fontWeight="lighter"
          mt="1.5rem"
          bgColor="#003382"
          _hover={{
            backgroundColor: "transparent",
            outline: "2px solid #003382",
          }}
        >
          Discover
        </Button>
      </Link>
    </Box>
  );
};

export default HeaderHtml;
