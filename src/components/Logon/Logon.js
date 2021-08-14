import React from "react";
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
  
  function Logon(props) {

    function handleSubmitForm(e) {
      e.preventDefault();
      props.onSubmitForm();
    } 

    const history = useHistory();

    function logoClick(e) {
    e.preventDefault();
    history.push('/')
  }
      return (
        <section className='logon'>
            <div className='logon__header'>
                <a href='/' onClick={logoClick}><img src={logo} alt='Логотип'/></a>
                <p className='logon__title'>
                  {(props.route === 'signin') ? 'Рады видеть!' : 'Добро пожаловать!'}
                </p>
            </div>
            <form className='logon__form' onSubmit={handleSubmitForm}>
              {props.children}
              {(props.route === 'signin') ? (
                <div className='logon__submit-box'>
                  {props.isReqErr ? (<p className='error__mes'>{props.errMessage}</p>) : ('')}
                  <button className={props.isFormValid ? 'logon__sumbit hover' : 'logon__sumbit logon__sumbit_disabled'} disabled={!props.isFormValid}>Войти</button>
                  <p className='logon__text'>Ещё не зарегистрированы? <a href='/signon' className='logon__link'>Регистрация</a></p>
                </div>
                ) : (
                <div className='logon__submit-box'>
                  {props.isReqErr ? (<p className='error__mes'>{props.errMessage}</p>) : ('')}
                  
                  <button className={props.isFormValid ? 'logon__sumbit hover' : 'logon__sumbit logon__sumbit_disabled'} disabled={!props.isFormValid}>Зарегистрироваться</button>
                
                  <p className='logon__text'>Уже зарегистрированы? <a href='/signin' className='logon__link'>Войти</a></p>
                </div>
                )}
            </form>
        </section>
      );
    }
    
    export default Logon;