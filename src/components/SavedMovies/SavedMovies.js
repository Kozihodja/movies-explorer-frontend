import React from "react";
import MoviesCard from '../Movies/MoviesCard/MovieCard';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';


  function SavedMovies() {

    const movies  = [
      {_id: 1, name: '33 слова о дизайне', image: img1, isSaved: 'true', duration: '1ч 47м',},
      {_id: 2, name: 'Киноальманах «100 лет дизайна»', image: img2, isSaved: 'false', duration: '1ч 3м',},
      {_id: 3, name: 'В погоне за Бенкси', image: img3, isSaved: 'false', duration: '1ч 42м',},
      {_id: 4, name: 'Баския: Взрыв реальности', image: img4, isSaved: 'false', duration: '1ч 21м',},
      {_id: 5, name: 'Бег это свобода', image: img5, isSaved: 'false', duration: '1ч 44м',},
      {_id: 6, name: 'Книготорговцы', image: img6, isSaved: 'true', duration: '1ч 37м',},
      {_id: 7, name: 'Когда я думаю о Германии ночью', image: img7, isSaved: 'false', duration: '1ч 56м',},
      {_id: 8, name: 'Gimme Danger: История Игги и The Stooge...', image: img8, isSaved: 'false', duration: '1ч 59м',},
      {_id: 9, name: 'Дженис: Маленькая девочка грустит', image: img9, isSaved: 'true', duration: '1ч 42м',},
      {_id: 10, name: 'Соберись перед прыжком', image: img10, isSaved: 'false', duration: '1ч 10м',},
      {_id: 11, name: 'Пи Джей Харви: A dog called money', image: img11, isSaved: 'false', duration: '1ч 4м',},
      {_id: 12, name: 'По волнам: Искусство звука в кино', image: img12, isSaved: 'false', duration: '1ч 7м',},
    ]
    
  
      return (
        <>
            <ul className="MovieCardList">
            {movies.filter(movie => movie.isSaved.includes('true')).map(filteredMovie => (
                <MoviesCard 
                    key={filteredMovie._id} 
                    name={filteredMovie.name}
                    image={filteredMovie.image}
                    isSaved={filteredMovie.isSaved}
                    duration={filteredMovie.duration}
                />    
            ))}
    	    </ul>
            <section className='movies__still'>
                { ((movies.filter(movie => movie.isSaved.includes('saved')).length > 12)) ? (
                    <>
                        <div className='movies__button-overlay'></div>
                        <button className='movies__button'></button>
                        <p className='movies__still-text'>Ещё</p>
                    </>
                ) : null }                
            </section>
        </>
      );
    }
    
    export default SavedMovies;