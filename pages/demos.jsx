import AnimeCard from "@/app/components/AnimeCard";
import AnimeDetails from "@/app/components/AnimeDetails";
import { useEffect, useState } from "react";

const DemosComponentes = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("/api/animes")
      .then((response) => response.json())
      .then((data) => setAnimes(data));
  }, []);

  return (
    <>
      <div
        key="animes"
        style={{
          display: "flex",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        {animes.map((anime) => {
          return <AnimeCard anime={anime} key={anime.id} />;
        })}
      </div>
      <hr />
      <div key="anime-details">
        <AnimeDetails anime={animes[0]} />
      </div>
    </>
  );
};

export default DemosComponentes;
