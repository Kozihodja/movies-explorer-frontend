import React from "react";
import { useLocation } from 'react-router-dom'
import SaveIcon from './SaveIcon/SaveIcon'
import DelIcon from './DelIcon/DelIcon'

  function MovieCard(props) {

    const location = useLocation();
    const current_page = location.pathname;

    const cardLikeButtonClassName = (`movie__like-icon ${props.movie.isSaved ? 'movie__like-icon_liked' : ''}`);
  
      return (
        <li className='movie-card'>
          <img src={props.movie.image} alt={props.movie.name} className='movie-card__img'/>
          <span className='movie-card__info'>
            <p className='movie-card__name'>{props.movie.name}</p>
            <button type="button" className="movie-card__like-button hover" aria-label="Поставить лайк">
					    {current_page === '/movies' ? 
                <SaveIcon 
                  movie = {props.movie}
                  cardLikeButtonClassName = {cardLikeButtonClassName}
                /> : <DelIcon/>}
			      </button>
          </span>
          <p className='movie-card__duration'>{props.movie.duration}</p>
        </li>
      );
    }
    
    export default MovieCard;