import React from "react";
import Logon from '../Logon/Logon'
  
  function Register(props) {

      return (
        <Logon 
            route='signon'
        >
            <label>
                <p className='logon__input-placeholder'>Имя</p>
                <input type='text' required name='name' className='logon__input'></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Email</p>
                <input type='email' required name='email' className='logon__input'></input>
              </label>
              <label>
                <p className='logon__input-placeholder'>Пароль</p>
                <input type='password' autoComplete="on" required className='logon__input' name='password'></input>
              </label>
        </Logon>
      );
    }
    
    export default Register;