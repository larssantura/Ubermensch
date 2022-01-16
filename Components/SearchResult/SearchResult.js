import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Router from "next/router";
import React from "react";

const SearchResult = ({ image, title, id }) => {
  const redirect = (ID) => {
    Router.push(`/Movie/${ID}`);
  };
  if (image) {
    return (
      <>
        {title ? (
          <Box
            display="flex"
            flexDirection="row"
            backgroundColor="#242424"
            margin="3"
            color="white"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              redirect(id);
            }}
          >
            <Image
              width={60}
              height={60}
              src={`https://image.tmdb.org/t/p/original${image}`}
              alt="search result image"
              objectFit="cover"
            />

            <Text
              paddingLeft={2}
              paddingRight={2}
              fontSize={13}
              maxWidth={250}
              fontWeight={500}
              letterSpacing={0.5}
            >
              {title}
            </Text>
          </Box>
        ) : null}
      </>
    );
  } else {
    return null;
  }
};

export default SearchResult;
