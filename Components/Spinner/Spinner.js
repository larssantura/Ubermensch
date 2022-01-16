import { Box, Text } from "@chakra-ui/react";
import React from "react";
import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <>
      <div className={classes.loader}>
        <div className={classes.face}>
          <div className={classes.circle}></div>
        </div>
        <div className={classes.face}>
          <div className={classes.circle}></div>
        </div>
      </div>
      {/* <Text ml={10} color="white">
        Loading..
      </Text> */}
    </>
  );
};

export default Spinner;
