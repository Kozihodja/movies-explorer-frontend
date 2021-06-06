import React from "react";
import profilePhoto from '../../../images/profilePhoto.png';
  
  function AboutMe() {
  
      return (
        <div className='about-project about-me'>
            <h2 className='about-project__title'>Cтудент</h2>
            <div className='about-me__info-box'>
                <div className='about-me__brief'>
                    <p className='about-me__name'>Виталий</p>
                    <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__info'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <ul className='about-me__links'>
                        <li><a href='#/' className='about-me__link'>Facebook</a></li>
                        <li><a href='#/' className='about-me__link'>GitHub</a></li>
                    </ul>
                </div>
                <img src={profilePhoto} alt='Фотография Виталия' className='about-me__img' />
            </div>
        </div>
      );
    }
    
    export default AboutMe;