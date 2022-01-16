import { Box, Container, Text } from "@chakra-ui/react";

import classes from "./about.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        textAlign="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyContent="space-between"
        width="100vw"
        height="100vh"
        overflowX="hidden"
        className={classes.container}
        onDoubleClick={() => {
          if (!showCursor) {
            setShowCursor(true);
          } else {
            setShowCursor(false);
          }
        }}
        onMouseMove={(e) => {
          setCursorLocation(e);
        }}
      >
        <Box
          width={150}
          height={150}
          opacity={0.4}
          className="blur"
          zIndex={100}
          backgroundColor="white"
          borderRadius="50%"
          position="absolute"
          display={showCursor ? "flex" : "none"}
          cursor="none"
          top={cursorLocation ? cursorLocation.pageY - 75 : 0}
          left={cursorLocation ? cursorLocation.pageX - 75 : 0}
        ></Box>
        <Box
          width={["90vw", "100vw", "45vw", "50vw"]}
          height={["100vh", "100vh", "100vh", "100vh"]}
          position="relative"
          backgroundImage="/Images/vector.jpg"
          backgroundSize="cover"
          backgroundPosition="center"
          alignItems="center"
          filter="auto"
          brightness={["50%", "50%", "", ""]}
        >
          {/* <Image
          src="/Images/vector.png"
          alt="vector"
          layout="fill"
          objectFit="cover"
        /> */}
        </Box>
        <Box>
          <Box>
            <Box
              maxWidth={["80vw", "80vw", "50vw", "50vw"]}
              color="white"
              fontSize={["40px", "35px", "30px", "35px"]}
              display={["block", "block", "block", "block"]}
              position={["absolute", "absolute", "relative", ""]}
              zIndex={30}
              top={["50%", "50%", "0", "0"]}
              left={["50%", "50%", "0", "0"]}
              transform="auto"
              translateY={["-50%", "-50%", "0", "0"]}
              translateX={["-50%", "-50%", "0", "0"]}
            >
              <motion.h1
                animate={{ color: "#c4c4c4" }}
                transition={{ duration: 2.5 }}
              >
                <Box
                  color={["white", "white", "", ""]}
                  lineHeight={["70px", "70px", "", ""]}
                >
                  Designed and Developed from scratch by me{" "}
                </Box>
              </motion.h1>
              <Box color="white" fontSize={["50px", "50px", "50px", "50px"]}>
                <motion.h1
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                  <Box
                    backgroundColor={[
                      "#00000081",
                      "#00000081",
                      "transparent",
                      "transparent",
                    ]}
                  >
                    Lars Santura
                  </Box>
                </motion.h1>
                <Box
                  color="white"
                  margin="30px auto"
                  fontSize={18}
                  mt={[20, 20, 20, 10]}
                  width={["80vw", "80vw", "40vw", "40vw"]}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                  >
                    Using Nextjs 12, TMDB API, Chackra UI for CSS, Framer Motion
                    for animations and Git for version control
                  </motion.p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Index;
