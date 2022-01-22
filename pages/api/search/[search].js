const SearchResultsAPI = async (req, res) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.query.search}&page=1`
  );
  const result = await data.json();

  res.json(result);
};
export default SearchResultsAPI;
