import React from "react";
import profilePhoto from '../../../images/profilePhoto.png';
  
  function AboutMe() {
  
      return (
        <div className='aboutProject aboutMe'>
            <h2 className='aboutProject__title'>Cтудент</h2>
            <div className='aboutMe__infoBox'>
                <div className='aboutMe__brief'>
                    <p className='aboutMe__name'>Виталий</p>
                    <p className='aboutMe__job'>Фронтенд-разработчик, 30 лет</p>
                    <p className='aboutMe__info'>
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <ul className='aboutMe__links'>
                        <li><a href='#/' className='aboutMe__link'>Facebook</a></li>
                        <li><a href='#/' className='aboutMe__link'>GitHub</a></li>
                    </ul>
                </div>
                <img src={profilePhoto} alt='Фотография Виталия' className='aboutMe__img' />
            </div>
        </div>
      );
    }
    
    export default AboutMe;