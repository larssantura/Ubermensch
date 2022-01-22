const Cast = async (req, res) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${req.query.id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const result = await data.json();

  res.json(result);
};
export default Cast;
