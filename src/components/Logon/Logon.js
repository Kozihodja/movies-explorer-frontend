import React from "react";
import logo from '../../images/logo.svg';
  
  function Logon(props) {

      return (
        <section className='logon'>
            <div className='logon__header'>
                <a href='/'><img src={logo} alt='Логотип'/></a>
                {(props.route === 'signin') ? (
                  <p className='logon__title'>Рады видеть!</p>
                ) : (
                  <p className='logon__title'>Добро пожаловать!</p>
                )}
            </div>
            <form className='logon__form'>
              {props.children}
              {(props.route === 'signin') ? (
                <div className='logon__submit-box'>
                  <button className='logon__sumbit hover'>Войти</button>
                  <p className='logon__text'>Ещё не зарегистрированы? <a href='/signon' className='logon__link'>Регистрация</a></p>
                </div>
                ) : (
                <div className='logon__submit-box'>
                  <button className='logon__sumbit hover'>Зарегистрироваться</button>
                  <p className='logon__text'>Уже зарегистрированы? <a href='/signin' className='logon__link'>Войти</a></p>
                </div>
                )}
            </form>
        </section>
      );
    }
    
    export default Logon;