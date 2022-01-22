import { Box, Text } from "@chakra-ui/react";
import Router from "next/router";
import { useState, useEffect } from "react";
import { useRef } from "react";
import SearchResult from "../SearchResult/SearchResult";

const SearchResults = ({ search, enter }) => {
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (enter) {
      setShowResults(false);
    }

    fetch(`/api/search/${search}`)
      .then((res) => {
        return res.json();
      })
      .then((t) => {
        setResults(t.results ? t.results : []);

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
      {showResults && search && results.length > 0 ? (
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
            zIndex="999"
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
