import React from "react";
import magnifier from '../../../images/search.svg';
import searchSubmit from '../../../images/searchSubmit.svg';
  
  function SearchForm() {
  
      return (
        <div className='searchBox'>
            <form className='searchForm'>
                <img src={magnifier} className='searchForm__img' alt="Лупа" />
                <input type="text" placeholder="Фильм" name="name" className='searchForm__input'/>
                <span className='searchForm__btn'>
                    <button type="submit" className='searchForm__submit'>
                        <img src={searchSubmit} className='searchForm__submitImg' alt="Стрелка" />
                    </button>
                    <span className='searchForm__vl'></span>
                    <input type="checkbox" name="name" className='searchForm__checkbox'/>
                    <p className='searchForm__checkboxName'>Короткометражки</p>
                </span>
            </form>
            <hr className='searchForm__gl'></hr>
        </div>
      );
    }
    
    export default SearchForm;