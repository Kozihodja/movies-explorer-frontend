import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MovieCard';


  function MovieCardList(props) {

    const count = props.count;

    let allSearchmovies = props.movies;

    const [addMoreCards, setAddMoreCards] = useState(0);

    const addMoreMovies = () => {
        count.setCountMovies(count.countMovies + addMoreCards)
    }
    const displayWidthCheck = () => {
        const display = window.innerWidth;

        if (display > 1280) {
            count.setCountMovies(12);
            setAddMoreCards(3);
        } else if (display > 644) {
            count.setCountMovies(8);
            setAddMoreCards(2);
        } else if (display < 644) {
            count.setCountMovies(5);
            setAddMoreCards(2);
        }
    }

    useEffect(() => {
        displayWidthCheck();
    // eslint-disable-next-line
    }, []);

      return (
        <>
              {props.isSearchErr ? (
                <p className="movie-card-list">
                  Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
                </p>
              ) : 
              (
                <>
                    {allSearchmovies.length ? (
                    <ul className="movie-card-list">
                      {allSearchmovies.slice(0, count.countMovies).map((movie, i) => (
                      <MoviesCard 
                        key={i} 
                        movie={movie}
                        onSaveIconClick = {props.onSaveIconClick}
                        baseUrl = 'https://api.nomoreparties.co'
                        onDelIconClick={props.onDelIconClick}
                      >
                      </MoviesCard>	
    			          ))}
                    </ul>
                    ) : (
                      <p className="movie-card-list">
                        Ни чего не найдено
                      </p>
                    )}
    		          
                  <section className='movies__still'>
                    {((count.countMovies < allSearchmovies.length)) ? (
                      <button onClick={addMoreMovies} className='movies__button'>
                        <p className='movies__still-text'>Ещё</p>
                      </button>
                    ) : null }                
                  </section>
                </>
              )}
        </>
      );
    }
    
    export default MovieCardList;