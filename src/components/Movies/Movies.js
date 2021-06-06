import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MovieCardList from './MoviesCardList/MoviesCardList'
import Preloader from "./Prelodaer/Preloader";

  function Movies() {

    const isLoad = false;

      return (
        <>
          <SearchForm />
          <Preloader 
            isLoad = {isLoad}
          />
          <MovieCardList>
              
          </MovieCardList>
        </>
      );
    }
    
export default Movies;