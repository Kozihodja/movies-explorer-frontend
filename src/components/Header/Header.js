import React from "react";
import { NavLink } from 'react-router-dom';
import Nav from './Nav/Nav'
import logo from '../../images/logo.svg';
import hiddenHeaderIcon from '../../images/nav.svg'

function navLink() {
    return (
      <section className='header__nav'>
        <a href='/'><img src={logo} className="header__logo" alt="логотип"/></a>
        <nav className="header__menu header__menu_out">
          <NavLink to="/signon" className="header__link header__link_signon hover">Регистрация</NavLink>
          <NavLink exact to="/signin" className="header__link header__link-signin hover ">Войти</NavLink>
        </nav>
      </section>
      
    )
  }
  
  function navLinkUserLogined(props) {
    return (
      <>
        <Nav />
        <section className='header__hidden'>
        <a href='/'><img src={logo} className="header__logo" alt="логотип"/></a>
          <button className='header__hidden-btn' onClick={props.onNavIconClick}>
            <img src={hiddenHeaderIcon} alt='Показать меню' className='header__hidden-icon hover'/>
          </button>
        </section>
      </>
    )
  }
  
  function Header(props) {
  
      return (
          <>
              {props.loggedIn === 'true' ? (
                <header className="header header__loggedin">
                  {navLinkUserLogined(props)}
                </header>
              ) : 
              (
                <header className="header header__out">
                  {navLink()}
                 </header>
              )}
          </>
      );
    }
    
    export default Header;