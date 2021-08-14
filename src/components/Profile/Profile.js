import React from "react";
import Header from "../Header/Header"
  
  function Profile(props) {

    const {
        user
    } = props;
  
    function onExit(e) {
      e.preventDefault();
      props.onExitClick();
    }
      return (
      <>
        <Header 
            loggedIn = {props.loggedIn}
            onNavIconClick={props.onNavIconClick}
          />
        <section className='profile'>
            <p className='profile__title'>Привет, {user.name}!</p>
            <ul className='profile__data'>
                <li className='profile__table-row'>
                    <p className='profile__placeholder'>Имя</p>
                    <p className='profile__info'>{user.name}</p>
                </li>
                <li className='profile__table-row'>
                    <p className='profile__placeholder'>E-mail</p>
                    <p className='profile__info'>{user.email}</p>
                </li>
            </ul>
            <ul className='profile__buttons-list'>
                <li><button className='profile__button hover' onClick={props.onEditProfileClick}>Редактировать</button></li>
                <li><a href='/' onClick={onExit} className='profile__button profile__button_out hover'>Выйти из аккаунта</a></li>
            </ul>
        </section>
      </>
      );
    }
    
    export default Profile;