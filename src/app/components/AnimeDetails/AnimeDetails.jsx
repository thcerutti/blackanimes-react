import style from "./AnimeDetails.module.css";

const AnimeDetails = ({ anime }) => {
  if (!anime) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={style.container}>
      {console.log("anime no details", anime)}
      <aside>
        <img src={anime.capa} alt="anime" />
      </aside>
      <section>
        <h2>
          {anime.nome} ({anime.ano})
        </h2>
        <p>{anime.genero}</p>
        <h3>Sinopse</h3>
        <p>{anime.sinopse}</p>
      </section>
    </div>
  );
};

export default AnimeDetails;
