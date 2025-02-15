import style from './AnimeCard.module.css';

const AnimeCard = ({ titulo, anoLancamento, imagem, link, abrirLinkEnNovaAba }) => {
  return (
    <div className={style.container}>
      <a href={link || "#"} target={abrirLinkEnNovaAba ? "_blank" : "_self"}>
        <img src={imagem} alt="anime" />
        <section>
          <h3>{titulo}</h3>
          <p>{anoLancamento}</p>
        </section>
      </a>
    </div>
  );
};

export default AnimeCard;
