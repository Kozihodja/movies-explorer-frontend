import React from "react";
import { useLocation } from 'react-router-dom'
import SaveIcon from './SaveIcon/SaveIcon'
import DelIcon from './DelIcon/DelIcon'

  function MovieCard(props) {

    // В зависимости от роута отрисовываются карточки и применяются те или иные функции
    const location = useLocation();
    const current_page = location.pathname;
    // Переменная для управления состояния кнопки сохранить в роуте /movies
    let isSaved;

    let url;

    if (current_page === '/movies') {
      url = props.baseUrl + props.movie.image.url;
      // Проверка содержит ли массив сохраненых фильмов текущий фильм(по ID)
      const result = JSON.parse(localStorage.getItem('savedMovies')).find(function(object) {
        return object.movieId === props.movie.id;
      });
      result ? isSaved = true: isSaved = false;
    } else if (current_page === '/saved-movies') {
      url = props.movie.thumbnail;
    }


    // Функция управления кнопкой карточки
    function onSaveIconClick() {
      if (current_page === '/movies') {
        if (isSaved) {
          console.log(props.movie)
          props.onDelIconClick(props.movie.id);
        } else {
          props.onSaveIconClick(props.movie);
        }
      } 
      else if (current_page === '/saved-movies') {

        // props.onDelIconClick(props.movie.id);
      }
    }
      return (
        <li className='movie-card'>
          <img src={url} alt={props.movie.name} className='movie-card__img'/>
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