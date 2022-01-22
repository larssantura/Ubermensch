const getMovies = async (req, res) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/${req.query.type}/movie/week?api_key=${process.env.API_KEY}`
  );
  const result = await data.json();

  res.json(result);
};
export default getMovies;
