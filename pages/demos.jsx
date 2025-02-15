import AnimeCard from "@/app/components/AnimeCard";
import db from "@/app/db.json";

const DemosComponentes = () => {
  return (
      <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <AnimeCard
          titulo={db.animes[0].nome}
          imagem={db.animes[0].capa}
          anoLancamento={db.animes[0].ano}
        />
        <AnimeCard
          titulo={db.animes[1].nome}
          imagem={db.animes[1].capa}
          anoLancamento={db.animes[1].ano}
        />
        <AnimeCard
          titulo={db.animes[2].nome}
          imagem={db.animes[2].capa}
          anoLancamento={db.animes[2].ano}
        />
      </div>
  );
};

export default DemosComponentes;
