import React from "react";
import { useLocation } from 'react-router-dom'
import SaveIcon from './SaveIcon/SaveIcon'
import DelIcon from './DelIcon/DelIcon'

  function MovieCard(props) {

    // В зависимости от роута отрисовываются карточки и применяются те или иные функции
    const location = useLocation();
    const current_page = location.pathname;
    // Переменная для управления состояния кнопки сохранить в роуте /movies
    let isSaved = false;
    let url;
    let trailerLink;
    let delMovieId = '';

    if (current_page === '/movies') {
      // Проверка содержит ли массив сохраненых фильмов текущий фильм(по ID)
      if (JSON.parse(localStorage.getItem('savedMovies')) !==null) {
      url = props.baseUrl + props.movie.image.url;
      trailerLink = props.movie.trailerLink
        const result = JSON.parse(localStorage.getItem('savedMovies')).find(function(object) {
          return object.movieId === props.movie.id;
        });
        if (result) {
          isSaved = true; 
          delMovieId = result._id
        }
      }
    } else if (current_page === '/saved-movies') {
      trailerLink = props.movie.trailer
      url = props.movie.thumbnail;
    }


    // Функция управления кнопкой карточки
    function onSaveIconClick() {
      if (current_page === '/movies') {
        if (isSaved) {
          props.onDelIconClick(delMovieId);
        } else {
          props.onSaveIconClick(props.movie);
        }
      } 
      else if (current_page === '/saved-movies') {
        props.onDelIconClick(props.movie._id);
      }
    }
      return (
        <li className='movie-card'>
          <a href={trailerLink} target="_blank" rel='noreferrer'><img src={url} alt={props.movie.name} className='movie-card__img'/></a>
          <span className='movie-card__info'>
            <p className='movie-card__name'>{props.movie.nameRU}</p>
            <button 
              onClick = {onSaveIconClick}
              type="button" 
              className="movie-card__like-button hover" 
              aria-label="Сохранить или удалить фильм"
              >
					    {current_page === '/movies' ? 
                <SaveIcon 
                  movie = {props.movie}
                  isSaved = {isSaved}
                /> : <DelIcon/>}
			      </button>
          </span>
          <p className='movie-card__duration'>{props.movie.duration}</p>
        </li>
      );
    }
    
    export default MovieCard;