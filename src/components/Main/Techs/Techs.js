import React from "react";

  
  function Techs() {
  
      return (
        <section className='about-project techs'>
            <h2 className='about-project__title'>Технологии</h2>
            <p className="techs__title">7 технологий</p>
            <p className='techs__descriptons'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
              <li className='techs__listItem'>HTML</li>
              <li className='techs__listItem'>CSS</li>
              <li className='techs__listItem'>JS</li>
              <li className='techs__listItem'>React</li>
              <li className='techs__listItem'>Git</li>
              <li className='techs__listItem'>Express.js</li>
              <li className='techs__listItem'>mongoDB</li>
            </ul>
        </section>
      );
    }
    
    export default Techs;