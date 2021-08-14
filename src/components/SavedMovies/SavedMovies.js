import React from "react";
import MoviesCard from '../Movies/MoviesCard/MovieCard';
import SearchForm from '../Movies/SearchForm/SearchForm'
import Preloader from '../Movies/Prelodaer/Preloader'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

  function SavedMovies(props) {

    const movies  = JSON.parse(localStorage.getItem('savedMovies'));;

    const isSavedMoviesLoad = false;
  
      return (
        <>
          <Header 
            loggedIn = {props.loggedIn}
            onNavIconClick={props.onNavIconClick}
          />
          <SearchForm />
          <Preloader 
            isLoad = {isSavedMoviesLoad}
          />
            <ul className="movie-card-list">
            {movies.map((movie) => (
                      <MoviesCard 
                        key={movie._id}
                        movie={movie}
                        onDelIconClick={props.onDelIconClick}
                      >
                      </MoviesCard>	
            ))}
    	    </ul>
            <section className='movies__still'>             
            </section>
            <Footer />
        </>
      );
    }
    
    export default SavedMovies;