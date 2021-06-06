import React from "react";
import Logon from '../Logon/Logon'
  
  function Register() {

      return (
        <Logon 
            route='signon'
        >
            <label>
                <p className='logon__input-placeholder'>Имя</p>
                <input type='text' required name='name' className='logon__input' minLength="2" maxLength="40"></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Email</p>
                <input type='email' required name='email' className='logon__input' minLength="6" maxLength="40"></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Пароль</p>
                <input type='password' autoComplete="on" required className='logon__input' name='password' minLength="6" maxLength="20" ></input>
              </label>
        </Logon>
      );
    }
    
    export default Register;