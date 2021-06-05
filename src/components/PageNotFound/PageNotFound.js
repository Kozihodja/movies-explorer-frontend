import React from "react";
import { useHistory } from 'react-router-dom'; 
  
  function PageNotFound() {
  
    const history = useHistory(); 

      return (
        <>
          <div className='PageNotFound'>
            <p className='PageNotFound__code'>404</p>
            <p className='PageNotFound__err'>Страница не найдена</p>
            <button className="PageNotFound__backBtn" onClick={() => history.goBack()}>Назад</button> 
          </div>
        </>
      );
    }
    
    export default PageNotFound;