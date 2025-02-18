import db from "@/app/db.json";
import favoritos from "@/app/favoritos.json";
import fs from 'fs';
import path from 'path';

const buscarAnimePorId = (id) => {
  return db.animes.find((anime) => anime.id === Number(id));
};

const salvarFavorito = (id) => {
  if (favoritos.animes.includes(id)) {
    return;
  }
  favoritos.animes.push(Number(id));
  const filePath = path.resolve(process.cwd(), 'src/app/favoritos.json');
  fs.writeFileSync(filePath, JSON.stringify(favoritos, null, 2));
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.query;
    const anime = buscarAnimePorId(id);
    if (!anime) {
      res.status(404).json({ message: "Anime não encontrado!" });
      return;
    }
    salvarFavorito(id);
    res.status(200).json({ message: "Anime favoritado com sucesso!" });
    return;
  }

  res.status(400).json({ message: "Método não permitido!" });
}
