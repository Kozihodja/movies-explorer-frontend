import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MovieCardList from './MoviesCardList/MoviesCardList'
import Preloader from "./Prelodaer/Preloader";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

  function Movies(props) {

    const [countMovies, setCountMovies] = React.useState(0);

      return (
        <>
          <Header 
            loggedIn = {props.loggedIn}
            onNavIconClick={props.onNavIconClick}
          />
          <SearchForm 
            onSearch = {props.onSearch}
            onShortMoviesClick = {props.onShortMoviesClick}
          />
          <Preloader 
            isLoad = {props.isLoad}
          />
          <MovieCardList 
            movies = {props.movies}
            isSearchErr = {props.isSearchErr}
            onSubmitMoreBtn = {props.onSubmitMoreBtn}
            count={{ countMovies, setCountMovies }}
            onSaveIconClick = {props.onSaveIconClick}
            onDelIconClick={props.onDelIconClick}
          />
          <Footer />
        </>
      );
    }
    
export default Movies;