import React, { useRef } from "react";
import { useLocation } from 'react-router-dom'
import magnifier from '../../../images/search.svg';
import searchSubmit from '../../../images/searchSubmit.svg';
  
  function SearchForm(props) {

    const location = useLocation();

    function search(e) {

      e.preventDefault();

      if (location.pathname === '/movies') {
        localStorage.setItem('userReq', (searchReq.current.value))
        props.onSearch();
      } else if (location.pathname === '/saved-movies') {
        localStorage.setItem('userSearchReqSavedMovies', (searchReq.current.value))
      }
    }

    let searchReq = useRef();
  
      return (
        <div className='search-box' onSubmit={search}>
            <form className='search-form'>
                <img src={magnifier} className='search-form__img' alt="Лупа" />
                <input ref={searchReq} type="text" required placeholder="Фильм" name="name" className='search-form__input'/>
                
                <button type="submit" className='search-form__submit hover'>
                    <img src={searchSubmit} className='search-form__submitImg' alt="Стрелка" />
                </button>
                <span className='search-form__vl'></span>
                <span className='search-form__checkbox-box' onClick={props.onShortMoviesClick}>
                    <input type="checkbox" name="name" className='search-form__checkbox' />
                    <p className='search-form__checkbox-name'>Короткометражки</p>
                </span>
            </form>
            <hr className='search-form__gl'></hr>
        </div>
      );
    }
    
    export default SearchForm;