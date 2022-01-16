import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CrewCard = ({ name, image }) => {
  return (
    <Box width="100vw" height="max-content" display="flex">
      <Box
        height={300}
        width={300}
        borderRadius="50%"
        backgroundSize="cover"
        position="relative"
        backgroundImage={`https://image.tmdb.org/t/p/original/${image}`}
      >
        {/* <Image
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt="actor image"
          layout="fill"
        /> */}
        {name}
      </Box>
    </Box>
  );
};

export default CrewCard;
