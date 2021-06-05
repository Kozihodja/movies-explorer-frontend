import React from "react";
import Logon from '../Logon/Logon'
  
  function Login(props) {

      return (
        <Logon 
            route='signin'
        >
            <label>
              <p className='logon__input-placeholder'>Email</p>
              <input type='email' required name='email' className='logon__input'></input>
            </label>
            <label>
              <p className='logon__input-placeholder'>Пароль</p>
              <input type='password' required name='password' className='logon__input'></input>
            </label>
        </Logon>
      );
    }
    
    export default Login;