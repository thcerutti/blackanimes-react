import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import style from "./Highlights.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.anterior}>
        <FaAngleLeft />
      </div>
      <div className={style.conteudo}></div>
      <div className={style.proximo}>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Header;
