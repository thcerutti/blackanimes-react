import styles from "./page.module.css";
import AnimeCard from "./components/AnimeCard";
import db from "./db.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Black Animes</h1>
      </header>
      <main className={styles.main}>
        {db.data.map((anime) => (
          <AnimeCard
            key={anime.id}
            titulo={anime.nome}
            anoLancamento={anime.ano}
            imagem={anime.capa}
          />
        ))}
      </main>
      <footer className={styles.footer}>
        <iframe
          src="https://drive.google.com/file/d/1RQ5XIfGbUz4_3U_ZP0c9PCQTu6CgPQmz/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <p>Feito por: Educando PAQ</p>
      </footer>
    </div>
  );
}
