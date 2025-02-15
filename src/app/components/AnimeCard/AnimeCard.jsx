import style from './AnimeCard.module.css';

const AnimeCard = ({ titulo, anoLancamento, imagem }) => {
  return (
    <div className={style.container}>
      <img src={imagem} alt="anime" />
      <h3>{titulo}</h3>
      <p>{anoLancamento}</p>
    </div>
  );
}

export default AnimeCard;
