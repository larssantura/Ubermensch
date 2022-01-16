import React from "react";
import Axios from "axios";
const TrendingMovies = async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  res.send(data);
};

export default TrendingMovies;
