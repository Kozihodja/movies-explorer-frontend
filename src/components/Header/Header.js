import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function navLink() {
    return (
      <nav className="header__menu">
          <NavLink exact to="/signin" className="header__link" activeClassName="header__link_active">Войти</NavLink>
          <NavLink to="/signup" className="header__link" activeClassName="header__link_active">Регистрация</NavLink>
      </nav>
    )
  }
  
  function navLinkUserLogined(props) {
    return (
      <div className="header__menu">
        <p className="header__email">{props.email}</p>
        <Link to="/signin" onClick={props.onExit} className="header__exit-link">Выйти</Link>
      </div>
    )
  }
  
  function Header(props) {
  
      return (
          <header className="header">
            <img src={logo} className="header__logo" alt="логотип" />
            {props.loggedIn}
              {props.loggedIn ? navLinkUserLogined(props) : navLink()}
          </header>
      );
    }
    
    export default Header;