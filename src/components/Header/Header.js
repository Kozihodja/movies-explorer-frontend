import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import accLogo from '../../images/account.svg';

function navLink() {
    return (
      <nav className="header__menu header__menu_out">
        <NavLink to="/signon" className="header__link header__link_signon hover">Регистрация</NavLink>
        <NavLink exact to="/signin" className="header__link header__link-signin hover ">Войти</NavLink>
      </nav>
    )
  }
  
  function navLinkUserLogined() {
    return (
      <>
        <div className="header__menu header__menu_logined">
         <Link to="/movies" className="header__link header__link_logined hover" activeClassName="active__navLink">Фильмы</Link>
         <Link to="/saved-movies" className="header__link header__link_logined hover" activeClassName="active__navLink">Сохраненные фильмы</Link>
        </div>
        <Link to="/saved-movies" className="header__link header__link_logined header__account hover">
          <p className='header__account-link'>Аккаунт</p>
          <img src={accLogo} alt='иконка аккаунта' className='header__account-icon'/>
        </Link>
      </>
    )
  }
  
  function Header(props) {
  
      return (
          <>
              {props.loggedIn === 'true' ? (
                <header className="header header__loggedin">
                  <img src={logo} className="header__logo" alt="логотип" />
                  {navLinkUserLogined()}
                </header>
              ) : 
              (
                <header className="header header__out">
                  <img src={logo} className="header__logo" alt="логотип" />
                  {navLink()}
                 </header>
              )}
          </>
      );
    }
    
    export default Header;