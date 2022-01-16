import { Box, Text } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";
import NotFound from "../404";

const Actor = ({ data }) => {
  if (!data.profile_path) {
    return <NotFound />;
  }
  return (
    <Box
      height="max-content"
      width="100vw"
      backgroundImage="/Images/stars.PNG"
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      flexDir="column"
      textAlign="left"
    >
      {console.log(data)}
      <Box
        margin="auto"
        height={350}
        width={350}
        borderRadius="50%"
        backgroundImage={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={10}
        mt={20}
      ></Box>
      <Text color="white" fontSize={30} zIndex={12} fontWeight={500} mb={5}>
        {data.name}
      </Text>
      <Box
        width={["100vw", "100vw", "70vw", "70vw"]}
        height="max-content"
        textAlign="center"
        backgroundColor="#121212"
        p="50px 20px"
        mt="-150px"
        pt="150px"
        mb={50}
      >
        <Text color="White">{data.biography}</Text>
        <Text color="#00bceb" mt={5}>
          Born in ({data.place_of_birth})
        </Text>
      </Box>
    </Box>
  );
};

export default Actor;
export async function getServerSideProps(context) {
  const res = await fetch(`
    https://api.themoviedb.org/3/person/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
