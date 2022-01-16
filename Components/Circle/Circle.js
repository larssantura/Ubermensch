import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Pie from "./Pie";

export default function Circle({ rate }) {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (rate <= 5) {
      setColor("red");
    }
    if (rate > 5 && rate <= 7.5) {
      setColor("orange");
    }
    if (rate > 7.5) {
      setColor("#00ff4c");
    }
  }, [rate]);
  return (
    <>
      <Box
        position="absolute"
        zIndex={2}
        top="50%"
        left="50%"
        transform="auto"
        translateX="-50%"
        translateY="-50%"
      >
        <Pie percentage={rate} colour={color} />
        <Box
          position="absolute"
          bottom={50}
          left="50%"
          translateX="-50%"
          transform="auto"
        >
          <Icon icon="bi:star-fill" color="gold" width="20" height="20" />{" "}
        </Box>
      </Box>
    </>
  );
}
