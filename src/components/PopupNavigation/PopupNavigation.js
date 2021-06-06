import React from "react";
import { NavLink } from 'react-router-dom';

import accLogo from '../../images/account.svg';

  
  function PopupNavigation(props) {

      return (
        <section className={`popup__nav ${props.isOpen ? 'popup__nav_is-opened' : ''}`}>
            <div className='popup__nav-section'>
                <button type='button' aria-label="Закрыть" className="popup-nav__close hover" alt="логотип" onClick={props.onClose}></button>
                <div className="popup-nav__menu">
                    <NavLink to="/" className="popup-nav__link hover" activeClassName="active__popup-nav-link" exact={true} onClick={props.onClose}>Главная</NavLink>
                    <NavLink to="/movies" className="popup-nav__link hover" activeClassName="active__popup-nav-link" onClick={props.onClose}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="popup-nav__link hover" activeClassName="active__popup-nav-link" onClick={props.onClose}>Сохраненные фильмы</NavLink>
                </div>
                <NavLink to="/profile" className="popup-nav__link header__account popup__account-link hover" activeClassName="active__profile-link" onClick={props.onClose}>
                    <p className='header__account-link'>Аккаунт</p>
                    <img src={accLogo} alt='иконка аккаунта' className='header__account-icon'/>
                </NavLink>
            </div>
       </section>
      );
    }
    
    export default PopupNavigation;