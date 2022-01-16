import { Box, Text } from "@chakra-ui/react";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useRef } from "react";
import SearchResult from "../SearchResult/SearchResult";

const SearchResults = ({ search, enter }) => {
  const [results, setResults] = useState("");
  const [clicked, setClicked] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (enter) {
      setShowResults(false);
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=67a9442bd256e2f4ab4e22d13b864f8c&language=en-US&query=${search}&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((t) => {
        setResults(t.results);

        if (results) {
          setShowResults(true);
        }
        if (!results) {
          setShowResults(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [search]);
  useEffect(() => {
    if (enter) {
      setShowResults(false);
    }
  }, [enter]);
  // useEffect(() => {
  //   if (Clicked && results) {
  //     console.log("clicked");
  //     setShowResults(true);
  //   }
  // }, [Clicked]);

  return (
    <div>
      {showResults && search ? (
        <>
          <Box
            fontSize="30"
            backgroundColor="black"
            color="white"
            height="400"
            width="max-content"
            overflow="scroll"
            overflowX="hidden"
            className="center"
            position="fixed"
            zIndex="20"
            padding="4"
            top="240px"
          >
            {results
              ? results.map((r) => {
                  return (
                    <Box
                      onClick={() => {
                        setShowResults(false);
                      }}
                      key={r.id}
                    >
                      {r.release_date && r.overview ? (
                        <SearchResult
                          image={r.poster_path}
                          title={`${r.title} (${r.release_date.substring(
                            0,
                            4
                          )})`}
                          id={r.id}
                          key={r.id}
                        />
                      ) : null}
                    </Box>
                  );
                })
              : null}
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default SearchResults;
