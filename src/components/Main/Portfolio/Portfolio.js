import React from "react";
import link from '../../../images/link.svg';
  
  function AboutMe() {
  
      return (
        <div className='portfolio'>
            <p className='portfolio__title'>Портфолио</p>
            <ul className='portfolio__lists'>
                <li className='portfolio__item'>
                    <a href='#/' className='portfolio__projectName'>Статичный сайт</a>
                    <a href='#/'><img src={link} className='portfolio__linkImg' alt="Стрелка" /></a>
                </li>
                <li className='portfolio__item'>
                    <a href='#/' className='portfolio__projectName'>Адаптивный сайт</a>
                    <a href='#/'><img src={link} className='portfolio__linkImg' alt="Стрелка" /></a>
                </li>
                <li className='portfolio__item'>
                    <a href='#/' className='portfolio__projectName'>Одностраничное приложение</a>
                    <a href='#/'><img src={link} className='portfolio__linkImg' alt="Стрелка" /></a>
                </li>
            </ul>
        </div>
      );
    }
    
    export default AboutMe;