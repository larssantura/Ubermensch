import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import CrewCard from "../Card/CrewCard";
import MovieCard from "../Card/MovieCard";
import SomethingWentWrong from "../../pages/SomethingWentWrong";

const CrewPage = ({ id }) => {
  const [crew, setCrew] = useState([]);
  const [limit, setLimit] = useState(true);
  useEffect(() => {
    fetch(`/api/cast/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((f) => {
        setCrew(f.cast);
      })
      .catch(() => {
        return <SomethingWentWrong />;
      });
  }, [id]);
  return (
    <div>
      {crew
        ? crew.map((p, i) => {
            if (limit && i < 10) {
              return (
                <MovieCard
                  type="cast"
                  id={p.id}
                  character={p.character}
                  key={p.id}
                  name={p.name}
                  image={p.profile_path}
                />
              );
            }
            if (!limit) {
              return (
                <MovieCard
                  type="cast"
                  id={p.id}
                  character={p.character}
                  key={p.id}
                  name={p.name}
                  image={p.profile_path}
                />
              );
            }
          })
        : null}
      <Box
        margin="auto"
        width="max-content"
        onClick={() => {
          if (limit) {
            setLimit(false);
          } else {
            setLimit(true);
          }
        }}
      >
        {limit && crew.length > 10 ? (
          <Icon
            icon="bi:arrow-down-circle-fill"
            width="60"
            height="60"
            color="#003382"
            cursor="pointer"
          />
        ) : null}
        {!limit && crew.length > 10 ? (
          <Icon
            icon="bi:arrow-up-circle-fill"
            width="60"
            height="60"
            color="#003382"
            cursor="pointer"
          />
        ) : null}
      </Box>
    </div>
  );
};

export default CrewPage;
