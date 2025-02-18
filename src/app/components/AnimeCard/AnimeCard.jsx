import style from "./AnimeCard.module.css";
import { FaHeart } from "react-icons/fa6";

const AnimeCard = ({
  abrirLinkEnNovaAba,
  anime,
}) => {
  return (
    <div className={style.container}>
      {console.log("anime no card", anime)}
      <a
        href={anime.link || "#"}
        target={abrirLinkEnNovaAba ? "_blank" : "_self"}
      >
        <img src={anime.capa} alt="anime" />
        <section>
          <h3>{anime.nome}</h3>
          <p>{anime.ano}</p>
          {anime.favorito ? <FaHeart /> : null}
        </section>
      </a>
    </div>
  );
};

export default AnimeCard;
