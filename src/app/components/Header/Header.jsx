import style from "./Header.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>Black Animes</h1>
      </div>
      <div className={style.menu}>
        <a href="#">Animes</a>
        <a href="#">Generos</a>
        <a href="#">Filmes</a>
      </div>
      <div className={style.busca}>
        <span><FaMagnifyingGlass /></span>
      </div>
    </div>
  );
};

export default Header;
