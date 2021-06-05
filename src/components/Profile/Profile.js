import React from "react";
  
  function Profile(props) {

    const {
        user
    } = props;
  
      return (
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
                <li><button className='profile__button profile__button_out hover'>Выйти из аккаунта</button></li>
            </ul>
        </section>
      );
    }
    
    export default Profile;