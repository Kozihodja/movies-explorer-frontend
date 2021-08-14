import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import logo from '../../images/logo.svg';
import hiddenHeaderIcon from '../../images/nav.svg'

  function Header(props) {

    const history = useHistory();

    function logoClick(e) {
    e.preventDefault();
    history.push('/')
  }
  
      return (
          <>
              {props.loggedIn ? (
                <header className="header header__loggedin">
                  {navLinkUserLogined(props, logoClick)}
                </header>
              ) : 
              (
                <header className="header header__out">
                  {navLink(logoClick)}
                </header>
              )}
          </>
      );
    }
    
    export default Header;

  function navLink(logoClick) {

      return (
        <section className='header__nav'>
          <a href='/' onClick={logoClick}><img src={logo} className="header__logo" alt="логотип"/></a>
          <nav className="header__menu header__menu_out">
            <NavLink to="/signon" className="header__link header__link_signon hover">Регистрация</NavLink>
            <NavLink exact to="/signin" className="header__link header__link-signin hover ">Войти</NavLink>
          </nav>
        </section>
      )
    }
  
  function navLinkUserLogined(props, logoClick) {

    return (
      <>
        <Navigation 
        />
        <section className='header__hidden'>
        <a href='/' onClick={logoClick}><img src={logo} className="header__logo" alt="логотип"/></a>
          <button className='header__hidden-btn' onClick={props.onNavIconClick}>
            <img src={hiddenHeaderIcon} alt='Показать меню' className='header__hidden-icon hover'/>
          </button>
        </section>
      </>
    )
  }