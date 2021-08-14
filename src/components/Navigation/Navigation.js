import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import accLogo from '../../images/account.svg';
  
  function Navigaton() {

    const history = useHistory();
  
    function logoClick(e) {
      e.preventDefault();
      history.push('/')
    }

      return (
        <section className='header__hidden-nav'>
          <a href='/' onClick={logoClick}><img src={logo} className="header__logo" alt="логотип"/></a>
          <div className="header__menu header__menu_logined">
            <NavLink to="/movies" className="header__link header__link_logined hover" activeClassName="active__navLink">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__link header__link_logined hover" activeClassName="active__navLink">Сохраненные фильмы</NavLink>
          </div>
          <NavLink to="/profile" className="header__link header__link_logined header__account hover" activeClassName="active__profileLink">
            <p className='header__account-link'>Аккаунт</p>
            <img src={accLogo} alt='иконка аккаунта' className='header__account-icon'/>
           </NavLink>
        </section>
      );
    }
    
    export default Navigaton;