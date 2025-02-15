import AnimeCard from "../AnimeCard";
import style from "./Lancamentos.module.css";
import db from "@/app/db.json";

const Lancamentos = () => {
  return (
    <div className={style.container}>
      <h2>Lançamentos</h2>
      <div>
        {db.animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            titulo={anime.nome}
            anoLancamento={anime.ano}
            imagem={anime.capa}
          />
        ))}
      </div>
    </div>
  );
};

export default Lancamentos;
