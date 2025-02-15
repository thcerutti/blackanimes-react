import style from './AnimeCard.module.css';

const AnimeCard = ({ titulo, anoLancamento, imagem }) => {
  return (
    <div className={style.container}>
      <img src={imagem} alt="anime" />
      <section>
        <h3>{titulo}</h3>
        <p>{anoLancamento}</p>
      </section>
    </div>
  );
}

export default AnimeCard;
