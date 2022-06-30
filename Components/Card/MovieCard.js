import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { useState } from "react";
import Circle from "../Circle/Circle";
import Spinner from "../Spinner/Spinner";

const MovieCard = ({ type, name, character, image, title, id, rate }) => {
  if (rate === Number) {
    rate = rate.tofixed(2);
  }
  const redirect = () => {
    if (type === "cast") {
      return Router.push(`/Actor/${id}`);
    }
    Router.push(`/Movie/${id}`);
  };
  const [hovered, setHovered] = useState(false);
  if (image) {
    return (
      <Box
        display="inline-flex"
        flexDirection="column"
        width={[170, 200, 225, 225]}
        onClick={redirect}
        cursor="pointer"
        justifyContent="center"
        height="max-content"
        position="relative"
      >
        <Box
          border="5px solid white"
          position="relative"
          margin="5"
          justifyContent="center"
          _hover={{ border: "5px solid #00bceb" }}
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <Spinner />
          {type !== "cast" ? (
            <Box display={hovered ? "block" : "none"} transition="2s">
              <Circle rate={rate} />
            </Box>
          ) : (
            <Box
              position="absolute"
              zIndex={10}
              width="100%"
              textAlign="center"
              flexDir="column"
              display={hovered ? "flex" : "none"}
              bgColor="red"
            >
              <Text
                position="absolute"
                textAlign="center"
                fontSize={22}
                width="100%"
                fontWeight={500}
              >
                {name}
              </Text>
              <br></br>
              <Text
                fontSize={[13, 14, 15, 16]}
                backgroundColor="#00bceb"
                color="black"
                marginTop="150px"
              >{`(${character})`}</Text>
            </Box>
          )}
          <Image
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt="modie card"
            width={225}
            height={325}
            objectFit="cover"
            layout="responsive"
            className={hovered ? "dark" : null}
          />
        </Box>
        <Box>
          <Text
            textAlign="center"
            maxWidth="500"
            alignItems="center"
            justifyContent="center"
            display="flex"
            fontSize={15}
            color="white"
            fontWeight={500}
          >
            {title}
          </Text>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};

export default MovieCard;
