import { Box, Container, Text } from "@chakra-ui/react";

import classes from "./about.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const [cursorLocation, setCursorLocation] = useState(null);
  const [showCursor, setShowCursor] = useState(false);

  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      exit={{ translateY: "100%" }}
      animate={{ translateY: 0 }}
    >
      <Box
        userSelect="none"
        display="flex"
        textAlign={["center", "center", "left", "left"]}
        // flexDirection=""
        alignItems="center"
        justifyContent="space-between"
        width="100vw"
        height="100vh"
        overflowX="hidden"
        className={classes.container}
      >
        <Box
          width={["100vw", "100vw", "45vw", "50vw"]}
          height={["100vh", "100vh", "100vh", "100vh"]}
          position={["absolute", "absolute", "relative", "relative"]}
          zIndex="-1"
          top="0"
          left="0"
          backgroundImage="/Images/myPlanet.jpg"
          backgroundSize="cover"
          backgroundPosition="center"
          alignItems="center"
          filter="auto"
          brightness={["80%", "80%", "", ""]}
        ></Box>
        <Box width={["100vw", "100vw", "50vw", "50vw"]} padding="0 50px">
          <motion.h1
            animate={{ color: "#c4c4c4" }}
            transition={{ duration: 2.5 }}
          >
            <Box color="#eee" fontSize={["30px", "35px", "40px", "40px"]}>
              A hobby project designed and developed from scratch by{" "}
            </Box>
          </motion.h1>
          <Box color="white" fontSize={["50px", "50px", "60px", "60px"]}>
            <motion.h1
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Link href="http://larssantura.com" passHref>
                <Box
                  backgroundColor={"#003382"}
                  width="max-content"
                  padding="0 20px"
                  cursor="pointer"
                  margin={["10px auto", "10px auto", "10px 0", "10px 0"]}
                >
                  Lars Santura
                </Box>
              </Link>
            </motion.h1>
            <Box
              color="white"
              // margin="30px auto"
              fontSize={[18, 18, 20, 20]}
              mt={10}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                Using NextJS, ThreeJS, TMDB API, Chakra UI for CSS, Framer
                Motion for animations and Git for version control
              </motion.p>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Index;
