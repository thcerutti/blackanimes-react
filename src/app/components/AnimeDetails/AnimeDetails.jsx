import style from "./AnimeDetails.module.css";

const AnimeDetails = ({ anime }) => {
  return (
    <div className={style.container}>
      <aside>
        <img src={anime.capa} alt="anime" />
      </aside>
      <section>
        <h2>{anime.nome} ({anime.ano})</h2>
        <p>{anime.genero}</p>
        <h3>Sinopse</h3>
        <p>{anime.sinopse}</p>
      </section>
    </div>
  );
};

export default AnimeDetails;
