import React from "react";
import link from '../../../images/link.svg';
  
  function AboutMe() {
  
      return (
        <section className='portfolio'>
            <p className='portfolio__title'>Портфолио</p>
            <ul className='portfolio__lists'>
                <li className='portfolio__item'>
                    <a href='https://github.com/Kozihodja/russian-travel' target='blank' className='portfolio__project-name'>Статичный сайт</a>
                    <a href='https://github.com/Kozihodja/russian-travel' target='blank'><img src={link} className='portfolio__link-Img' alt="Стрелка" /></a>
                </li>
                <li className='portfolio__item'>
                    <a href='https://github.com/Kozihodja/russian-travel' target='blank' className='portfolio__project-name'>Адаптивный сайт</a>
                    <a href='https://github.com/Kozihodja/russian-travel' target='blank'><img src={link} className='portfolio__link-Img' alt="Стрелка" /></a>
                </li>
                <li className='portfolio__item'>
                    <a href='https://github.com/Kozihodja/react-mesto-auth' target='blank' className='portfolio__project-name'>Одностраничное приложение</a>
                    <a href='https://github.com/Kozihodja/react-mesto-auth' target='blank'><img src={link} className='portfolio__link-Img' alt="Стрелка" /></a>
                </li>
            </ul>
        </section>
      );
    }
    
    export default AboutMe;