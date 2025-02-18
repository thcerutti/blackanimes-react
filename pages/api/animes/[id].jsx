import db from "@/app/db.json";
import favoritos from "@/app/favoritos.json";

export default function handler(req, res) {
  const animeEncontrado = db.animes.find(
    (anime) => anime.id === Number(req.query.id)
  );

  if (!animeEncontrado) {
    res.status(404).json({ message: "Anime não encontrado!" });
    return;
  }

  animeEncontrado.favorito = favoritos.animes.includes(req.query.id);
  res.status(200).json(animeEncontrado);
}
