import React from "react";
import { useHistory } from 'react-router-dom'; 
  
  function PageNotFound() {
  
    const history = useHistory(); 

      return (
          <div className='page-not-found'>
            <p className='page-not-found__code'>404</p>
            <p className='page-not-found__err'>Страница не найдена</p>
            <button className="page-not-found__backBtn hover" onClick={() => history.goBack()}>Назад</button> 
          </div>

      );
    }
    
    export default PageNotFound;