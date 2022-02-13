import React from "react";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style["wrapper-example"]}>
      <div>
        <p>Учебная работа ННГУ. Курс React_2022</p>
      </div>
    </footer>
  );
};

export default Footer;