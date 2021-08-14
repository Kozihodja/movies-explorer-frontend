import React from "react";
import Logon from '../Logon/Logon'
import Preloader from "../Movies/Prelodaer/Preloader";
import useInput from "./../../utils/Validate"
  
  function Register(props) {
;

    const email = useInput('', {isEmpty : true, minLength: 6, maxLength: 40, isEmail: true})
    const name = useInput('', {isEmpty : true, minLength: 2, maxLength: 40 , isName: true,})
    const password = useInput('', {isEmpty : true, minLength: 6, maxLength: 12, isPassword: true})

    function onSubmit() {
      props.onSubmitForm(name.value, email.value, password.value);
    }

      return (
        <>
        <Logon
            route='signon'
            isFormValid={name.inputValid && password.inputValid && email.inputValid}
            onSubmitForm = {onSubmit}
            errMessage = {props.errMessage}
            isReqErr={props.isReqErr}
        >
            <label>
                <p className='logon__input-placeholder'>Имя</p>
                <input
                  value = {name.value}
                  type='text'
                  required
                  name='name'
                  className='logon__input'
                  minLength="2"
                  maxLength="40"
                  onChange={e => name.onChange(e)}
                  onBlur={e => name.onBlur(e)}
                ></input>
                {(name.isDirty && (name.isEmpty )) && <p className='error__mes'>Поле пустое</p>}
                {(name.isChanged && (name.minLengthErr || name.maxLengthErr || name.nameError)) && <p className='error__mes'>Поле должно содержать только латиницу, кириллицу, пробел или дефис</p>}
              </label>
              <label>
                <p className='logon__input-placeholder'>Email</p>
                <input 
                  type='email'
                  value={email.value}
                  required
                  name='email'
                  className='logon__input'
                  minLength="6"
                  maxLength="40"
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
                  autoComplete="on"
                  required
                  className='logon__input'
                  name='password'
                  minLength="6"
                  maxLength="20"
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
    
    export default Register;