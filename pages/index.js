import { Box, Button, Text } from "@chakra-ui/react";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { PerspectiveCamera } from "three";
import Header from "../Components/Header/Header";
import HeaderHtml from "../Components/Header/HeaderHtml";
import Navbar from "../Components/Navbar/Navbar";
import TrendingMoviesPage from "./TrendingMoviesPage";
import Planet from "/public/models/Planet";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderHtml />

      <Text
        color="white"
        textAlign="center"
        fontWeight={300}
        padding={3}
        fontSize={30}
        className="gradient"
      >
        Trending
      </Text>
      <TrendingMoviesPage type="trending" />
      <Text
        color="white"
        textAlign="center"
        fontWeight={300}
        padding={3}
        fontSize={30}
        className="gradient"
        mt="20px"
      >
        Highest Rated
      </Text>
      <TrendingMoviesPage type="top_rated" />
    </>
  );
};

export default Home;
