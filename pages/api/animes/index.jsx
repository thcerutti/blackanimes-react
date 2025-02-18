import db from "@/app/db.json";
import favoritos from "@/app/favoritos.json";

export default function handler(req, res) {
  db.animes.forEach((anime) => {
    anime.favorito = favoritos.animes.includes(anime.id);
  });
  res.status(200).json(db.animes);
}
