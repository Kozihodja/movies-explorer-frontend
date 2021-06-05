import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MovieCardList from './MoviesCardList/MoviesCardList'

  
  function Movies() {
  
      return (
        <>
          <SearchForm />
          <MovieCardList />
        </>
      );
    }
    
    export default Movies;