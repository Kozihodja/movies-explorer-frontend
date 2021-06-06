import React from "react";
import magnifier from '../../../images/search.svg';
import searchSubmit from '../../../images/searchSubmit.svg';
  
  function SearchForm() {
  
      return (
        <div className='search-box'>
            <form className='search-form'>
                <img src={magnifier} className='search-form__img' alt="Лупа" />
                <input type="text" placeholder="Фильм" name="name" className='search-form__input'/>
                
                <button type="submit" className='search-form__submit'>
                    <img src={searchSubmit} className='search-form__submitImg' alt="Стрелка" />
                </button>
                <span className='search-form__vl'></span>
                <span className='search-form__checkbox-box'>
                    <input type="checkbox" name="name" className='search-form__checkbox'required/>
                    <p className='search-form__checkbox-name'>Короткометражки</p>
                </span>
            </form>
            <hr className='search-form__gl'></hr>
        </div>
      );
    }
    
    export default SearchForm;