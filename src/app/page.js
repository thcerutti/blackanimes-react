import styles from "./page.module.css";
import AnimeCard from "./components/AnimeCard";
import Header from "./components/Header";
import Highlight from "./components/Highlights";
import db from "./db.json";
import Lancamentos from "./components/Lancamentos";
import UltimosEpisodios from "./components/UltimosEpisodios";
import AnimesRecentes from "./components/AnimesRecentes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Highlight />
      <Lancamentos />
      <UltimosEpisodios />
      <AnimesRecentes />
      <Footer />
      <main className={styles.main}>
        {db.animes.map((anime) => (
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
          allow="autoplay; fullscreen"
        ></iframe>
        <p>Feito por: Educando PAQ</p>
      </footer>
    </div>
  );
}
