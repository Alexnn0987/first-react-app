import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style['wrapper-example']}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </NavLink>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
