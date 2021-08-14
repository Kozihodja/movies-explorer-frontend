import React from "react";
import Logon from '../Logon/Logon'
import Preloader from "../Movies/Prelodaer/Preloader";
import useInput from "./../../utils/Validate";
  
  function Login(props) {

    const email = useInput('', {isEmpty : true, minLength: 6, maxLength: 40, isEmail: true})
    const password = useInput('', {isEmpty : true, minLength: 6, maxLength: 12, isPassword: true})    

    function onSubmit() {
      props.onSubmitForm(email.value, password.value);
    }

      return (
      <>
        <Logon 
            route='signin'
            isFormValid={password.inputValid && email.inputValid}
            onSubmitForm = {onSubmit}
            errMessage = {props.errMessage}
            isReqErr={props.isReqErr}
        >
            <label>
              <p className='logon__input-placeholder'>Email</p>
              <input
                value={email.value}
                type='email' 
                required 
                name='email' 
                className='logon__input'
                minLength="6" 
                maxLength="40"
                autoComplete="username"
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                ></input>
                {(email.isDirty && (email.isEmpty )) && <p className='error__mes'>Поле пустое</p>}
                {(email.isChanged && (email.minLengthErr || email.maxLengthErr || email.emailError)) && <p className='error__mes'>Не верный формат электронной почты</p>}
            </label>
            <label>
              <p className='logon__input-placeholder'>Пароль</p>
              <input 
                value={password.value}
                type='password' 
                required 
                name='password' 
                className='logon__input'
                minLength="6" 
                maxLength="40"
                autoComplete="current-password"
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
              ></input>
              {(password.isDirty && (password.isEmpty )) && <p className='error__mes'>Поле пустое</p>}
                {(password.isChanged && (password.minLengthErr || password.maxLengthErr || password.passwordError)) && <p className='error__mes'>Пароль должен состоять от 6 до 20 латинских символов в верхнем и нижнем регистре а так же содержать спец символы !@#$%^&*</p>}
            </label>
        </Logon>
        <Preloader 
        isLoad = {props.isLoad}
        />
      </>
      );
    }
    
    export default Login;