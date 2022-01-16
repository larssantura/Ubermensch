import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Box
      height="100vh"
      backgroundColor="#121212"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir={["column", "column", "row", "row"]}
    >
      <Image
        src="/Images/404.png"
        alt="404 image"
        width={500}
        height={400}
        objectFit="cover"
      />
      <Flex flexDirection="column" color="white" textAlign="center">
        <Text color="white" fontSize={[30, 35, 40, 40]}>
          Page not found :(
        </Text>
        <Text>
          Navigate to the{" "}
          <span>
            <Link href="/">Home</Link>
          </span>{" "}
          page
        </Text>
      </Flex>
    </Box>
  );
};

export default NotFound;
