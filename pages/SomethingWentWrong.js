import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SomethingWentWrong = () => {
  return (
    <Box height="100vh" width="100vw" backgroundColor="#121212">
      <Text fontSize={100} zIndex={20}>
        Something went worng :( <br /> Check your enternet connection
      </Text>
    </Box>
  );
};

export default SomethingWentWrong;
